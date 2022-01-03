
from service.base_service import BaseService
from dao.gen_dao import GenDao

class GenService(BaseService):
    def __init__(self) -> None:
        super().__init__()
        self.gen_dao = GenDao()

    def write_data(self, data: str) -> str:
        try:
            self.gen_dao.add_keyword_to_db(data)
            return "Success"
        except Exception as ex:
            return str(ex)


    def read_data(self) -> None:
        data = self.gen_dao.get_all_data_from_db()
        return data