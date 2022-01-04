import os
import pickle

class BaseDao:
    id_list = []
    max_id = None

    def __init__(self, path="./dao/data.pickle") -> None:
        self.path = path
        if os.path.exists(path):
            print("Loading Data in Memory")
            with open(path, 'rb') as f:
                self.database = pickle.load(f)
            for element in self.database:
                self.id_list.append(int(element["id"]))
            self.max_id = 0 if len(self.id_list) == 0 else max(self.id_list) 
        else:
            print("Creating New DataBase")
            self.database = []
            with open(path, 'wb') as f:
                pickle.dump(self.database, f)
            self.max_id = 0
        print("Base DAO Initialized")

    
    def get_next_id(self):
        if self.max_id is not None:
            self.max_id += 1
        return self.max_id

    def create_a_local_copy(self):
        with open(self.path, 'wb') as f:
            pickle.dump(self.database, f)

    def add_keyword_to_db(self, keyword: str) -> None:
        self.database.append({"item": keyword, "id": self.get_next_id()})
        self.create_a_local_copy()
        print(self.database)
        return None

    def delete_data_from_db(self, id: int) -> None:
        i = 0
        for element in self.database:
            if element["id"] == id:
                self.database.pop(i)
                self.create_a_local_copy()
                self.id_list.remove(id)
                break
            i += 1

    def get_all_data_from_db(self):
        return self.database

            
