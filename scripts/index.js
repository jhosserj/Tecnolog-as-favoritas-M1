class Activity {
  constructor(id, title, description, imgUrl) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.imgUrl = imgUrl;
  }
}

class Repository {
  constructor() {
    this.activities = [];
  }

  
  getAllActivities() {
    return this.activities;
  }
  
  createActivity(title, description, imgUrl) {
    const id = this.activities.length + 1;
    const actividad = new Activity(id, title, description, imgUrl);
    this.activities.push(actividad);
    
  }
  
  deleteActivity(id) {
    this.activities = this.activities.filter(objeto => objeto.id !== id);
    return this.activities;
  };
}
    
const repository = new Repository();


    const builActivity = (activity) => {
      const {id, title, description, imgUrl } = activity;

      const containerCard = document.createElement("div");


      const titleElement = document.createElement("h2");
      const imageElement = document.createElement("img");
      const descriptionElement = document.createElement("p");


      //agregamos contenido a cada elemento
    
      titleElement.textContent = title;
      imageElement.src = imgUrl;
      descriptionElement.textContent = description;
 

      // agregamos los elementos al contenedor 

      containerCard.appendChild(titleElement);
      containerCard.appendChild(imageElement);
      containerCard.appendChild(descriptionElement);
      // agregamos la clase al contenedor
      
      containerCard.classList.add("card");

      imageElement.addEventListener("click", ()=>{
        containerCard.parentNode.removeChild(containerCard);
        repository.deleteActivity(id);
      })
     
      return containerCard;

      // repository.createActivity
    }

    const buildActivities = () =>{
      const containerItems = document.getElementById("container")
      containerItems.innerHTML = "";

      const listActivities = repository.getAllActivities();

      
     const listActivitiesDom = listActivities.map(item => builActivity(item))
   
     listActivitiesDom.forEach(item => {
      containerItems.appendChild(item);
     })
    }

    
     const handler = (e) =>{
      console.log("hola mundo!");
      e.preventDefault();
      const title = document.getElementById("title").value
      const description = document.getElementById("desc").value
      const imgUrl = document.getElementById("image").value
    
      // validamos que los campos esten vacios
      if (title === "" || description === "" || imgUrl === "" ){
        
        return alert("Todos los campos son requeridos");
      }
 


      document.getElementById("title").value = "";
      document.getElementById("desc").value = "";
      document.getElementById("image").value = "";
      
      repository.createActivity(title, description, imgUrl);
      
      return buildActivities();
      
      
    };
      const button = document.getElementById("send");

      button.addEventListener("click", handler);

      // button.addEventListener("click", (e) =>{
      //   e.preventDefault();
      //   console.log("eventos", e);
      // });


  

   


