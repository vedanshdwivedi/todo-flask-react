import os
import pickle

class BaseDao:
    def __init__(self) -> None:
        path = "./dao/data.pickle"
        if os.path.exists(path):
            print("Loading Data in Memory")
            with open(path, 'rb') as f:
                self.database = pickle.load(f)
        else:
            print("Creating New DataBase")
            self.database = []
            with open(path, 'wb') as f:
                pickle.dump(self.database, f)
        print("Base DAO Initialized")