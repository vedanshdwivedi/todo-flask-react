
from service.base_service import BaseService
from dao.gen_dao import GenDao

class GenService(BaseService):
    def __init__(self) -> None:
        super().__init__()
        self.gen_dao = GenDao()