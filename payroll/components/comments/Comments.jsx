"use client";
import React, { useState } from "react";
import Icon from "@/helper/Icon";
import Image from "next/image";
import GroupImage from "./GroupImage";
import CommentFormatter from "@/helper/CommentFormatter";
import TextEditor from "../reuseableComponent/TextEditor";

const Comments = ({ commentData }) => {
  const [reply, setReply] = useState("");
  const [data, setData] = useState(commentData);
  
  const [showReplyField, setShowReplyField] = useState({});

  const setShowReply = (index, value) => {
    setShowReplyField((prev) => ({ ...prev, [index]: value }));
  };


  const addReply = (e, commentId) => {
    console.log("commentId", commentId);
    setData(commentData);
    e.preventDefault();

    const updatedData = [...data];

    if (
      !updatedData[commentId] ||
      !Array.isArray(updatedData[commentId].replies)
    ) {
      console.error("Invalid commentId or replies array");
      return;
    }

    updatedData[commentId].replies.push({
      name: "Nicholas Chan",
      time: "1h ago",
      comment: reply,
      attachments: [],
      reaction: { like: 0, comment: 0 },
      replies: [],
    });

    setData(updatedData);
    setReply("");

    console.log("updatedData", updatedData);
  };

  console.log("commentData", commentData);
  console.log("reply", reply);

  return (
    <div>
      {commentData.map((comments, index) => {
        return (
          <div key={index} className="w-full border-t-2 border-gray-100 pt-5">
            <div className="flex w-full justify-between items-center">
              <div className="flex justify-center items-center">
                <div className="w-[45px] mr-2 h-[45px] bg-primary rounded-full flex justify-center items-center">
                  <Image
                    className="flex justify-center rounded-full items-center"
                    src={comments.userImage || "/dummyUser.png"}
                    width={40}
                    height={40}
                    alt="user-comment"
                  />
                </div>
                <h3 className="text-md font-medium"> {comments.name} </h3>
                <li className="ml-5 text-gray-400 font-medium">
                  {comments.time}
                </li>
              </div>
              <span>
                <Icon name="EllipsisVertical" />
              </span>
            </div>

            <div className="px-5 py-2 text-gray-700">
              <CommentFormatter comment={comments.comment} />
            </div>

            {comments.attachments.length > 0 && (
              <div>
                <div className="w-full mx-2 my-3 py-4 px-5 rounded-lg bg-gray-100">
                  <span className="text-gray-600 font-medium">
                    {comments.attachments.length} files
                  </span>
                  <div className="mt-2 grid grid-cols-2 gap-4 w-full justify-start items-center">
                    {comments.attachments.map((attachment, ind) => (
                      <div
                        key={ind}
                        className="rounded-md mx-3 bg-white px-3 py-1 flex justify-center items-center"
                      >
                        <Icon name="Image" size={20} />
                        <span className="text-gray-600 ml-3">
                          {attachment.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            <div className="flex px-5 justify-start my-3 items-center">
              <p className="flex bg-gray-100 rounded-md px-3 py-2 justify-center items-center">
                <Icon name="Heart" />
                <span className="ml-3">
                  {comments.reaction.like || "0"} Like
                </span>
              </p>
              <p
                onClick={() => setShowReply(index, true)}
                className="flex bg-gray-100 rounded-md px-3 py-2 ml-3 justify-center items-center cursor-pointer"
              >
                <Icon name="Reply" />
                <span className="ml-3"> Reply </span>
              </p>
            </div>

            {showReplyField[index] && (
              <div className="ml-5 pb-5">
                <TextEditor
                  inputData={(val) => setReply(val)}
                  textArea={false}
                />
                <button
                  onClick={(e) => addReply(e, index)}
                  type="submit"
                  className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800"
                >
                  Add Reply
                </button>
              </div>
            )}

            {comments.replies.length > 0 && (
              <div>
                <div>
                  <div className="px-5 ml-5 py-2 flex justify-start items-center">
                    <GroupImage repliesData={comments.replies} />
                  </div>

                  {comments.replies.map((replies, replyIndex) => {
                    return (
                      <div
                        key={replyIndex}
                        className="bg-gray-100 ml-10 my-4 rounded-xl pt-5 pb-2 px-5"
                      >
                        <div>
                          <div className="flex w-full justify-between items-center">
                            <div className="flex justify-center items-center">
                              <div className="w-[35px] mr-2 h-[35px] bg-primary rounded-full flex justify-center items-center">
                                <Image
                                  className="flex justify-center rounded-full items-center"
                                  src={comments.userImage || "/dummyUser.png"}
                                  width={30}
                                  height={30}
                                  alt="user-comment"
                                />
                              </div>
                              <h3 className="text-md font-medium">
                                {replies.name}
                              </h3>
                              <li className="ml-5 text-gray-400 font-medium">
                                {replies.time}
                              </li>
                            </div>
                            <span>
                              <Icon name="EllipsisVertical" />
                            </span>
                          </div>

                          <div className="px-5 py-2 text-gray-700">
                            <CommentFormatter comment={replies.comment} />
                          </div>

                          {replies.attachments.length > 0 && (
                            <div>
                              <div className="w-full mx-2 my-3 py-4 px-5 rounded-lg bg-white">
                                <span className="text-gray-600 font-medium">
                                  {replies.attachments.length} files
                                </span>
                                <div className="mt-2 grid grid-cols-2 gap-4 w-full justify-start items-center">
                                  {replies.attachments.map(
                                    (attachment, ind) => (
                                      <div
                                        key={ind}
                                        className="rounded-md mx-3 bg-gray-100 px-3 py-1 flex justify-center items-center"
                                      >
                                        <Icon name="Image" size={20} />
                                        <span className="text-gray-600 ml-3">
                                          {attachment.name}
                                        </span>
                                      </div>
                                    )
                                  )}
                                </div>
                              </div>
                            </div>
                          )}

                          <div className="flex px-5 justify-start my-3 items-center">
                            <p className="flex bg-white rounded-md px-3 py-2 justify-center items-center">
                              <Icon name="Heart" />
                              <span className="ml-3">
                                {replies.reaction.like} Like
                              </span>
                            </p>
                            <p className="flex bg-white rounded-md px-3 py-2 ml-3 justify-center items-center">
                              <Icon name="Reply" />
                              <span className="ml-3"> Reply </span>
                            </p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Comments;

