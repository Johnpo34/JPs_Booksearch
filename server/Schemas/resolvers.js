const { User } = require('../modles');

const resolvers = {
    Query: { 
        user: async () => {
            return User.find().populate("books");
        },
        me: async (parent, args, context) => {
            if (context.user) {
                return User.findOne({ _id: context.user.id }).populate("books");
            }
            throw new AuthenticationError(
                "You must be logged in to view this"
            );
        },
    },
};

module.exports = resolvers;