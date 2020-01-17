type Subject = {
  id: string;
  name: string;
  description: string;
  type: string;
  degree: number;
};

export default {
  Query: {
    subjects: async (parent, args, { models }): Promise<Subject[]> =>
      await models.Subject.findAll({
        include: [{ model: models.Topic, as: "topics" }],
      }),
    subject: async (parent, { id }, { models }): Promise<Subject> =>
      await models.Subject.findByPk(id),
  },
};
