import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


// function Paraph(props) {
//   const name = props.name;
//   const company = props.company;

//   return(
//     <div>
//       <h1>BIODATA PERUSAHAAN</h1>
//       <ul>
//         <li>Nama : {name}</li>
//         <li>Company : {company}</li>
//         <li>Tagline : Education</li>
//         <li>Bidang : Education</li>
//       </ul>
//     </div>
//   )
// }

// function Contacts(){
//   const names = ['Asep', 'Alex', 'Bagus', 'Cika', 'Doni'];
  
//   return (
//     <ol className="contacts">
//       {names.map((names) => (
//         <li>{names}</li>
//         )
//         )}
//     </ol>
//   )
// }

function Button({link}) {
  return(
    <a href={link}>Find out more</a>
  )
}
 
function CardHeader({category, image}) {
  return(
    <div className="cardHeader-container">
      <h4>{category}</h4>
      <img src={image} alt="" />
    </div>
  )
}
 
function CardBody({date, title, content}) {
  return(
    <div className="cardBody-container">
      <p>{date}</p>
      <h2>{title}</h2>
      <p>{content}</p>
      <Button link= "https://www.youtube.com/" />
    </div>
  )
}
 
function Card({image, category, date, title, content, link}) {
  return(
    <article>
      <CardHeader image={image} category={category}/>
      <CardBody date={date} title={title} content={content} link={link}/>
    </article>
  )
}
 
function Header({ title, subtitle }) {
  return (
    <header>
      <h1>{title}</h1>
      <p>{subtitle}</p>
    </header>
  );
}

 
function News() {
  // data news
  const someNews = [
    {
      title: 'CNN Acuire BEME',
      date: 'March 20 2022',
      content: "CNN purchased Casey Neistat's Beme app for $25million.",
      image: 'https://source.unsplash.com/user/erondu/600x400',
      category: 'News',
      link: '#'
    },
    {
      title: 'React and the WP-API',
      date: 'March 19 2022',
      content: 'The first ever decoupled starter theme for React & the WP-API.',
      image: 'https://source.unsplash.com/user/ilyapavlov/600x400',
      category: 'News',
      link: '#'
    },
    {
      title: 'Nomad Lifestyle',
      date: 'March 19 2022',
      content: 'Learn our tips and tricks on living a nomadic lifestyle.',
      image: 'https://source.unsplash.com/user/erondu/600x400',
      category: 'Travel',
      link: '#'
    }
  ];
 
  // TODO: selesaikan component-nya
  return (
    <div>
      <Header title="Latest News" subtitle="Covering March & april 2022" />
      {someNews.map((news) => (
        <Card {...news} key={news.title}/>
      ))}
    </div>
  )
}

export default function App() {
  return (
    <div className="App">
      <News />
    </div>
  )
}
