import { Header } from "./components/Header";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";

import styles from "./App.module.css";

import "./global.css";
import { PostProps } from "./components/Post";

const posts: PostProps[] = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/BrunnoCode.png",
      name: "Brunno Rocha",
      role: "Web Developer",
    },
    content: [
      { type: "paragraph", content:" Fala galeraa 👋 Acabei de subir mais um projeto no meu portifa. É um" },
      { type: "paragraph", content:"projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é" },
      { type: "link", content: "jane.design/doctorcare" },
    ],
    publishedAt: new Date("2022-12-08 18:57:00"),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/diego3g.png",
      name: "Diego Fernandes",
      role: "CTO @Rocketseat",
    },
    content: [
      { type: "paragraph", content:" Fala galeraa 👋 Acabei de subir mais um projeto no meu portifa. É um"},
      { type: "paragraph", content:"projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é"},
      { type: "link", content: "jane.design/doctorcare" },
    ],
    publishedAt: new Date("2022-12-10 18:57:00"),
  },
];

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            );
          })}
        </main>
      </div>
    </div>
  );
}
