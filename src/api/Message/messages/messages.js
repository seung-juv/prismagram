import { prisma } from "../../../../generated/prisma-client";

export default {
  Query: {
    messages: (_, args) => {
      const { roomId } = args;
      return prisma.messages({
        where: {
          room: {
            id: roomId
          }
        }
      });
    }
  }
};
