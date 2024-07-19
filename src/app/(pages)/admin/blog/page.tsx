import { Metadata } from 'next'
import PostsList from './list/postsList';

export const metadata: Metadata = {
  title: "Blog Page | Everlywell add blog page",
  description: "This is Blog Page for Everlywell application",
};

export default function posts() {
  return (
    <>
      <PostsList/>
    </>
  )
}
