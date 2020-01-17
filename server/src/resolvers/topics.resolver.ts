type Topic = {
  id: string;
  name: string;
  description: string;
  subjectId: string;
};

export default {
  Query: {
    topics: async (parent, args, { models }): Promise<Topic[]> =>
      await models.Topic.findAll({
        include: [{ model: models.Subject, as: "subject" }],
      }),
    topic: async (parent, { id }, { models }): Promise<Topic> =>
      await models.Topic.findByPk(id, {
        include: [{ model: models.Quiz, as: "quiz" }],
      }),
  },
};
