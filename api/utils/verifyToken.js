import jwt from "jsonwebtoken";
import { createError } from "../utils/error.js";

export const verifyToken = (req, res, next) => {
  const token = req.cookies.access_token;
  if (!token) {
    return next(createError(401, "Você não está autenticado!"));
  }
  jwt.verify(token, process.env.JWT, (err, user) => {
    if (err) return next(createError(403, "Token inválido!"));
    req.user = user;
    next();
  });
};

export const verifyUser = (req, res, next) => {
    verifyToken(req, res, () => {
      const { id, isAdmin, isEstablishment } = req.user;
      if (id === req.params.id || isAdmin || isEstablishment) {
        next();
      } else {
        return next(createError(403, "Você não está autorizado!"));
      }
    });
  };

export const verifyAdmin = (req, res, next) => {
    verifyToken(req, res , () => {
        if(req.user.isAdmin) {
            next();
        } else {
            return next(createError(403, "Você não está autorizado!"));
        }
    })
}

export const verifyEstablishment = (req, res, next) => {
    verifyToken(req, res, () => {
      const { isEstablishment } = req.user;
      if (isEstablishment) {
        next();
      } else {
        return next(createError(403, "Você não está autorizado!"));
      }
    });
  };

  export const verifyMotoboy = (req, res, next) => {
    verifyToken(req, res, () => {
      const { isMotoboy } = req.user;
      if (isMotoboy) {
        next();
      } else {
        return next(createError(403, "Você não está autorizado como motoboy!"));
      }
    });
  };
