import userService from "../services/userService.js";
import { HTTP_STATUS, MESSAGES } from "../constants/index.js";
import logger from "../utils/logger.js";

// Criar usuário
export const createUser = async (req, res, next) => {
  try {
    const user = await userService.createUser(req.body);
    logger.info(`Usuário criado: ${user.email} (ID: ${user._id})`);
    return res.status(HTTP_STATUS.CREATED).json(user);
  } catch (err) {
    logger.error(`Erro ao criar usuário: ${err.message}`, { stack: err.stack });
    return next(err);
  }
};

// Listar todos
export const getUsers = async (req, res, next) => {
  try {
    const users = await userService.getUsers();
    logger.info(`Listagem de usuários retornou ${users.length} registros`);
    return res.status(HTTP_STATUS.OK).json(users);
  } catch (err) {
    logger.error(`Erro ao listar usuários: ${err.message}`, {
      stack: err.stack,
    });
    return next(err);
  }
};

// Buscar por ID
export const getUserById = async (req, res, next) => {
  try {
    const user = await userService.getUserById(req.params.id);
    if (!user) {
      logger.warn(`Usuário não encontrado: ID ${req.params.id}`);
      return res
        .status(HTTP_STATUS.NOT_FOUND)
        .json({ message: MESSAGES.USER.NOT_FOUND });
    }
    logger.info(`Usuário encontrado: ${user.email} (ID: ${user._id})`);
    return res.status(HTTP_STATUS.OK).json(user);
  } catch (err) {
    logger.error(`Erro ao buscar usuário: ${err.message}`, {
      stack: err.stack,
    });
    return next(err);
  }
};

// Atualizar
export const updateUser = async (req, res, next) => {
  try {
    const user = await userService.updateUser(req.params.id, req.body);
    if (!user) {
      logger.warn(
        `Tentativa de atualizar usuário inexistente: ID ${req.params.id}`
      );
      return res
        .status(HTTP_STATUS.NOT_FOUND)
        .json({ message: MESSAGES.USER.NOT_FOUND });
    }
    logger.info(`Usuário atualizado: ${user.email} (ID: ${user._id})`);
    return res.status(HTTP_STATUS.OK).json(user);
  } catch (err) {
    logger.error(`Erro ao atualizar usuário: ${err.message}`, {
      stack: err.stack,
    });
    return next(err);
  }
};

// Deletar
export const deleteUser = async (req, res, next) => {
  try {
    const result = await userService.deleteUser(req.params.id);
    if (!result) {
      logger.warn(
        `Tentativa de deletar usuário inexistente: ID ${req.params.id}`
      );
      return res
        .status(HTTP_STATUS.NOT_FOUND)
        .json({ message: MESSAGES.USER.NOT_FOUND });
    }
    logger.info(`Usuário deletado: ID ${req.params.id}`);
    return res
      .status(HTTP_STATUS.OK)
      .json({ success: true, message: MESSAGES.USER.DELETED });
  } catch (err) {
    logger.error(`Erro ao deletar usuário: ${err.message}`, {
      stack: err.stack,
    });
    return next(err);
  }
};
