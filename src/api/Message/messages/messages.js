import { prisma } from "../../../../generated/prisma-client";

export default {
  Query: {
    messages: () => prisma.messages()
  }
};
