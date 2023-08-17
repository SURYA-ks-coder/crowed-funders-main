import React from 'react'
import { useParams } from 'react-router-dom';
// import img1 from "./image/Online_D.jpg";
import './Success.css'
import Sucess_Stories from './Sucess_Stories';

import img2 from './image/img2.jpg'
import img4 from './image/img4.jpg'
import img6 from './image/img6.jpg'
import img8 from './image/img8.jpg'
import img9 from './image/img9.jpg'


function Success() {
  const owl=[{img:img2,name:'Akil',id:1},
              {img:img4,name:'Ananth',id:2},
              {img:img6,name:'selvin',id:3},
              {img:img8,name:'kumar',id:4},
              {img:img9,name:'Melvin',id:5}]

  const{ id }=useParams()

  const filite =()=>{

    let data=owl.filter((f)=>(f.id)===parseInt(id))
    return data[0]
  }
  
  return (
    <div className='container'>
        <div class="row">
    <div class="col-md-8">
      <div class="card mb-3 success_img">
      <img src={filite().img }className='rounded float-start '  alt="" />
  <div class="card-body">
    <h5 class="card-title"> {filite().name } </h5>
    <p class="card-text text-start">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum autem illum praesentium placeat perferendis laudantium ullam, non, assumenda magni eaque sint corporis eum dolor ipsum hic pariatur labore earum aut corrupti iure vel sed ut. Perferendis et 
        consequatur nisi aliquid eaque corrupti nam? Laboriosam distinctio est animi quisquam ad deleniti!
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat consequatur aliquid expedita ducimus nesciunt eaque dolore ullam dicta nostrum architecto, 
          accusantium inventore quas non molestiae? Aut cupiditate molestiae laudantium explicabo.
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt hic
           modi temporibus rerum illum adipisci vitae eos neque beatae quos tempora sint non, 
           aliquam repellat nesciunt ex? Quisquam cum dolores quae tenetur ipsa, aspernatur optio 
           excepturi magnam sint vero asperiores fugit quaerat inventore temporibus consequatur eum quia,
            rem aliquid saepe, impedit vitae minus magni culpa? Dolorem, laudantium. Accusantium error quod minus modi iure quo deserunt optio excepturi praesentium cupiditate amet sint unde fuga, ut voluptatum facilis voluptates. Quis eligendi necessitatibus, blanditiis assumenda ea aut, maxime id natus praesentium sunt at unde doloribus facere harum odit voluptates deleniti, dicta sapiente adipisci. Recusandae sapiente hic modi ipsa similique et. Placeat fugiat sit nisi laudantium magnam? Aut sequi accusamus totam placeat, porro ab quis est error nobis. Totam quae fugit earum similique, qui eos sint minima reprehenderit optio id, voluptatem dolorum debitis, fugiat sed! Expedita beatae sit rem, velit quod ipsam placeat similique officiis modi error voluptates aperiam at sed ratione nesciunt nisi quam esse nulla minima voluptatem perferendis necessitatibus sint hic. Ullam autem ad illo cumque veritatis, reiciendis nisi quia necessitatibus? Debitis assumenda recusandae harum eaque labore maxime, necessitatibus atque, quae voluptatum odit facilis rem molestiae velit sequi odio ipsa laboriosam placeat soluta cum. Eos, eius nemo. Libero, neque assumenda. Distinctio eos saepe eligendi labore assumenda consequuntur maxime adipisci nisi officia, vero, beatae vel iure dolorum atque recusandae similique placeat! Beatae voluptates magnam quaerat natus deserunt fugit debitis voluptatibus iusto inventore fugiat! Dicta aliquid aperiam beatae libero laborum sint, incidunt expedita illo, consequatur minima ipsa blanditiis repudiandae hic dolor in eveniet odio explicabo sequi ab tempora? Consequatur totam labore iste corporis, rem odio officiis perspiciatis minima distinctio eveniet provident asperiores dolorem, dolorum nisi ratione dicta magnam blanditiis quibusdam sed reprehenderit assumenda. Magni vel officia error voluptatem ab. Accusamus numquam vitae sapiente voluptatem, porro modi, illo sit excepturi doloremque iste corporis hic distinctio voluptas? Quasi inventore voluptatem explicabo totam quam aliquid sapiente eos in, vel eveniet. Odio, eaque ipsam quo voluptas quae sapiente temporibus, non nostrum nemo aut adipisci consectetur placeat natus impedit animi esse voluptatem! Consequuntur nemo praesentium veniam, numquam libero nulla, neque tempore explicabo voluptatibus velit consectetur excepturi minima! Enim nobis labore ratione sed dicta alias modi obcaecati dolore asperiores quia hic vitae architecto laborum quis quas deserunt aliquam, excepturi reprehenderit dolores maxime eum. Eum deleniti magnam totam modi veritatis omnis expedita labore error perferendis voluptatum, sunt officia! Cum velit molestias reiciendis error, exercitationem, fugit debitis pariatur voluptatem magni impedit magnam sed provident nemo autem quasi! Excepturi, qui. Consectetur animi modi placeat incidunt possimus sequi magni aut odio dolore repellat error recusandae eligendi odit nihil vero, facere iste perferendis architecto aliquid reprehenderit itaque iusto! Accusantium tenetur ducimus, repellat cum aperiam quisquam aliquid aspernatur beatae, dolorum molestiae illo dolores soluta voluptates sed quo? Eum nulla in reiciendis repellendus debitis, modi aliquid. Ducimus repudiandae corporis enim ea architecto. Exercitationem rerum et quis illo quaerat numquam voluptates aut repudiandae, temporibus quibusdam, necessitatibus 
          similique unde dolore eveniet nemo aspernatur quae? Ea maiores labore pariatur atque.</p>
    
  </div>
</div>
      
     
    </div>
    <div class="col-md-4">
      
      <Sucess_Stories/>
    </div>
  </div>
  </div>


  )
}

export default Success