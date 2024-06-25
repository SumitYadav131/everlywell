import { Metadata } from 'next';
import React from 'react'

type Props ={
  params:{
    postId: string;
  };
};

export const generateMetadata=({params}:Props):Metadata=>{
  return {
    title:`Post ${params.postId}`,
  }
}

export default function postDetail({params}:Props) {
  return (
    <div>
      postDetail {params.postId}
    </div>
  )
}
