import { Layout } from '@components/Layout';
import { Feed } from '@components/Feed';
import { Suggestions } from '@components/Suggestions';

export default function Index({ posts }) {
  return (
    <Layout>
      <Feed posts={posts}></Feed>
      <Suggestions></Suggestions>
    </Layout>
  );
}

export async function getServerSideProps(context) {

  const data = [
    {
      id: 1,
      author: {
        id: 1,
        avatar:
          '/images/avatar.png',
        name: 'Will Smith',
        username: 'willsmith',
      },
      description: '',
      tags: ['youtube', 'endregionclone'],
      songName: 'WAP (feat. Megan Thee Stallion) - Cardi B',
      videoUrl:
        'https://v16m.tiktokcdn.com/4790d9d66b908dfbd4a9fa359116a41b/5febd550/video/tos/alisg/tos-alisg-pve-0037c001/3c4f172abd4e4ba79a077c1ca55c8191/?a=1233&br=1258&bt=629&cd=0%7C0%7C1&cr=0&cs=0&cv=1&dr=0&ds=3&er=&l=2020122919180001019018716314142470&lr=tiktok_m&mime_type=video_mp4&qs=0&rc=MzRqaTpqZWxleTMzZDczM0ApZzM0aGdnZDszN2ZmOjw1ZWcvb3MyNXFsZzVfLS02MTRzczZhMy1jNGMxMi5hLzUvLzM6Yw%3D%3D&vl=&vr=',
      likes: 650,
      comments: 10,
      replies: 50,
    },
    {
      id: 2,
      author: {
        id: 1,
        avatar:
          '/images/avatar.png',
        name: 'Will Smith',
        username: 'willsmith',
      },
      description: 'Vídeo teste para clone de interface',
      tags: ['youtube', 'clone'],
      songName: 'Tampa Curhat Beat - TampaCurhat',
      videoUrl:
        'https://v58.tiktokcdn.com/video/tos/alisg/tos-alisg-pve-0037c001/b007551c029a42c69c625edf7963ab9d/?VExpiration=1609290696&VSignature=gcZVgGHM8PmvPlE2jPNYag&a=1233&br=500&bt=250&cd=0%7C0%7C1&cr=0&cs=0&cv=1&dr=0&ds=3&er=&l=20201229191105010189074016151490BC&lr=tiktok_m&mime_type=video_mp4&qs=0&rc=Mzdnb2RqaTh2eTMzNjczM0ApODdoNWY7Nzs0NzRlZGlpaGdocmJzc2tla2RfLS1iMTRzc14zYS0xYTQyLTZgNjViXzQ6Yw%3D%3D&vl=&vr=',
      likes: 650,
      comments: 10,
      replies: 50,
    },
  ];

  return {
    props: {
      posts: data,
    }, //will be passed to the page component as props
  };
}