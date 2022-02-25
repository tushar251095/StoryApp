const { DateTime }= require('luxon')
const { v4: uuidv4 } = require('uuid');

//stories array it is an array of objects
const stories = [
  {
    id: 1,
    title: "A funny story",
    content:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.",
    author: "John Willson",
    createdAt: DateTime.now().toLocaleString(DateTime.DATETIME_SHORT),
  },
  {
    id: 2,
    title: "It is raining",
    content:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.",
    author: "John Willson",
    createdAt: DateTime.local(2021,2,12,18,0).toLocaleString(DateTime.DATETIME_SHORT),
  },
  {
    id: 3,
    title: "Snow in Charlotte",
    content:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.",
    author: "John Willson",
    createdAt: DateTime.local(2021,9,8,15,0).toLocaleString(DateTime.DATETIME_SHORT),
  },
];

//exports stories array
exports.find=()=> stories

//send object found by requested id
exports.findById=(id)=> {
   return stories.find(story=>story.id == id)
}

//add object send by user in array
exports.save=(story)=>{
    story.createdAt=DateTime.now().toLocaleString(DateTime.DATETIME_SHORT);
    story.id=uuidv4();
    stories.push(story)
}

//update object by id
exports.updateByID=(id,newStory)=>{
    let story=this.findById(id);
    if(story){
        story.title=newStory.title
        story.content=newStory.content
        return true
    }else{
        return false
    }
}

//delete object by id
exports.deleteByID=(id)=>{
    console.log(id)
    let index=stories.findIndex(story=>story.id==id);
    console.log(index)
    if(index!==-1){
       stories.splice(index,1)
        return true
    }else{
        return false
    }
}
