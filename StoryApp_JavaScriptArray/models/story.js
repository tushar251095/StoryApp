const { DateTime }= require('luxon')
const { v4: uuidv4 } = require('uuid');

//stories array it is an array of objects
const stories = [
  {
    id: 1,
    title: "A funny story",
    content:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.",
    author: "Billy Ritter",
    createdAt: DateTime.now().toLocaleString(DateTime.DATETIME_SHORT),
  },
  {
    id: 2,
    title: "It is raining",
    content:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. ",
    author: "Brandon Cambell",
    createdAt: DateTime.local(2021,2,12,18,0).toLocaleString(DateTime.DATETIME_SHORT),
  },
  {
    id: 3,
    title: "Snow in Charlotte",
    content:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
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
    let index=stories.findIndex(story=>story.id==id);
    if(index!==-1){
       stories.splice(index,1)
        return true
    }else{
        return false
    }
}
