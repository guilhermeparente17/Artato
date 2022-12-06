import React from 'react'
import { AiOutlineLeft } from "react-icons/ai";
import { AiOutlineRight } from "react-icons/ai";

import {
    CommentsContainer,
    CommentsId,
    CommentsName,
    CommentsResponse,
    CommentsContent,
    Steps,
    Step
} from './Comments.Elements'

const Comments = ({item, key}) => {
  return (
    <CommentsContainer key={key}>
        <CommentsContent>
            <div>
                <CommentsId>#{item.id}</CommentsId>

                <CommentsName>{item.name}</CommentsName>

                <CommentsResponse>{item.comment}</CommentsResponse>
            </div>

            <Steps>
                <Step><AiOutlineLeft size="30" color="#FE8230" /></Step>
                <Step><AiOutlineRight size="30" color="#FE8230" /></Step>
            </Steps>
        </CommentsContent>
        
    </CommentsContainer>
  )
}

export default Comments