
const { User, Chat, Message } = require('../models');
const { signToken, AuthenticationError } = require('../utils/authMiddleware');

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id }).select('-__v -password');

        return userData;
      }

      throw AuthenticationError;
    },
    allUsers: async (parent, args, context) => {
        if (context.user) {
            const keyword = req.query.search 
            ? {
                $or: [
                  { name: { $regex: req.query.search, $options: "i" } },
                  { email: { $regex: req.query.search, $options: "i" } },
                ],
              }
            : {};

          const userData = await User.find(keyword).find({ _id: { $ne: context.user._id } });
  
          return userData;
        }
  
        throw AuthenticationError;
      },
  },

  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },
    login: async (parent, { email, password }) => {
      console.log(email, password)
      const user = await User.findOne({ email });

      if (!user) {
        throw AuthenticationError;
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw AuthenticationError;
      }

      const token = signToken(user);
      return { token, user };
    },
   
  },
};

module.exports = resolvers;