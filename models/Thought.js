const { Schema, Types, model } = require('mongoose');
function formatDate(timeStamp){
  return `${new Date(timeStamp).getMonth() + 1}/${new Date(timeStamp).getDate()}/${
  
    new Date(timeStamp).getFullYear() + 5
  }`;
}
const reactionSchema = new Schema( 
{
  reactionId: 
      {type: Schema.Types.ObjectId,
        default:() => new Types.ObjectId()},
        reactionBody:{
          type: String, 
        required: true,
        max_length: 280,
        },
        username: {
          type: String,
          required: true,
        },
        createdAt: {
          type: Date,
          default: Date.now,
          get: timeStamp => formatDate(timeStamp)
      },
},
); 
const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String, 
        required: true,
        max_length: 280,
        min_length: 1,
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: timeStamp => formatDate(timeStamp) 
    },
    username: {
      type: String,
      required: true,
    },
    reactions: [
      reactionSchema
    ],
  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);

thoughtSchema.virtual('reactionCount').get(function() {
  return this.reactions.length;
});

const Thought = model('Thought', thoughtSchema);

module.exports = Thought;