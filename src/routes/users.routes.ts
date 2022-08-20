import { Router } from "express";

import userCreateController from "../controllers/user/userCreate.controller";
import usersReadAllController from "../controllers/user/usersReadAll.controller";
import userReadOneController from "../controllers/user/userReadOne.controller";
import userUpdateController from "../controllers/user/userUpdatecontroller";
import userDeleteController from "../controllers/user/userDelete.controller";
import { handleErrorMiddleware } from "../middlewares/handleError.middleware";

const router = Router();

router.post("", userCreateController);
router.get("", usersReadAllController);
router.get("/:id", userReadOneController);
router.patch("/:id", userUpdateController);
router.delete("/:id", userDeleteController);

router.use(handleErrorMiddleware);

export default router;
