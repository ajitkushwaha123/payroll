"use client";
import React, { useState } from "react";
import TextEditor from "@/components/reuseableComponent/TextEditor";
import Comments from "./Comments";
import Icon from "@/helper/Icon";


const CommentTab = ({ showTab = true, commentDummyData }) => {
  const [commentData, setCommentData] = useState([]);
  const [open, setOpen] = useState(showTab);
  const [comment, setComment] = useState("");
  const [data, setData] = useState(commentDummyData);

  const toggleTab = (e) => {
    e.preventDefault();
    setOpen(!open);
  };

  const inputComment = (val) => {
    setComment(val);
  };

  const addComment = (e) => {
    e.preventDefault();
    console.log("comment", comment);
    const newComment = {
      name: "Nicholas Chan",
      time: new Date().toLocaleTimeString(),
      comment: comment,
      attachments: [],
      reaction: { like: 0, comment: 0 },
      replies: [],
    };
    const updatedData = [...data, newComment];
    setData(updatedData);
    console.log("updatedData", updatedData);
  };

  return (
    <div>
      {open === true ? (
        <div>
          <div
            id="popup-modal"
            className="overflow-y-auto chalaja w-full shadow-lg top-0 right-0 min-h-screen shadow-indigo-500/40 backdrop-blur-sm bg-indigo-500/10 overflow-x-hidden fixed z-50 justify-center items-center md:inset-0 h-[calc(100%-1rem)]"
          >
            <div className="flex min-h-screen p-4 items-end justify-end">
              <div className="relative chalaja w-[600px] overflow-y-scroll min-h-screen bg-white rounded-lg shadow dark:bg-gray-700">
                <div className="w-[100%] py-5 flex px-5 justify-between items-center">
                  <p className="text-xl font-semibold font-poppins">Comment</p>
                  <div>
                    <button
                      onClick={(e) => toggleTab(e)}
                      type="button"
                      className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-md w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      <Icon name="X" />
                    </button>
                  </div>
                </div>

                <div className="border-b-2 border-gray-100"></div>

                <div className="p-5">
                  <TextEditor inputData={(val) => inputComment(val)} />
                  <button
                    onClick={(e) => {
                      addComment(e);
                    }}
                    type="submit"
                    className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800"
                  >
                    Add Comment
                  </button>
                </div>

                <div className="w-[100%] px-5">
                  <Comments
                    commentData={data}
                    setCommentData={setCommentData}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default CommentTab;

const data = [
  {
    name: "Nicholas Chan",
    time: "1h ago",
    userImage: "/user.png",
    comment:
      "Hi @everyone I’ve updated the presentation slides and spreadsheet as well. Please check it out! 🙏 cc @clivebixby cc I’ve corrected my mistakes there from last week.",
    attachments: [
      { name: "presentation1.pptx", type: "pptx" },
      { name: "presentation2.pptx", type: "pptx" },
      { name: "presentation1.pptx", type: "pptx" },
      { name: "presentation2.pptx", type: "pptx" },
    ],
    reaction: { like: 5, comment: 3 },
    replies: [
      {
        name: "Clive Bixby",
        time: "5min ago",
        comment:
          "Hi @everyone I’ve updated the presentation slides and spreadsheet as well. Please check it out! 🙏 cc @clivebixby cc I’ve corrected my mistakes there from last week.",
        attachments: [
          { name: "presentation1.pptx", type: "pptx" },
          { name: "presentation2.pptx", type: "pptx" },
        ],
        reaction: { like: 3, comment: 3 },
        replies: [],
      },

      {
        name: "Clive Bixby",
        time: "5min ago",
        comment:
          "Hi @everyone I’ve updated the presentation slides and spreadsheet as well. Please check it out! 🙏 cc @clivebixby cc I’ve corrected my mistakes there from last week.",
        attachments: [
          { name: "presentation1.pptx", type: "pptx" },
          { name: "presentation2.pptx", type: "pptx" },
        ],
        reaction: { like: 5, comment: 3 },
        replies: [],
      },
    ],
  },

  {
    name: "Nicholas Chan",
    time: "1h ago",
    comment:
      "Hi @everyone I’ve updated the presentation slides and spreadsheet as well. Please check it out! 🙏 cc @clivebixby cc I’ve corrected my mistakes there from last week.",
    attachments: [],
    reaction: { like: 5, comment: 3 },
    replies: [
      {
        name: "Clive Bixby",
        time: "5min ago",
        comment:
          "Hi @everyone I’ve updated the presentation slides and spreadsheet as well. Please check it out! 🙏 cc @clivebixby cc I’ve corrected my mistakes there from last week.",
        attachments: [
          { name: "presentation1.pptx", type: "pptx" },
          { name: "presentation2.pptx", type: "pptx" },
        ],
        reaction: { like: 5, comment: 3 },
        replies: [],
      },
    ],
  },

  {
    name: "Nicholas Chan",
    time: "1h ago",
    comment:
      "Hi @everyone I’ve updated the presentation slides and spreadsheet as well. Please check it out! 🙏 cc @clivebixby cc I’ve corrected my mistakes there from last week.",
    attachments: [],
    reaction: { like: 5, comment: 3 },
    replies: [
      {
        name: "Clive Bixby",
        time: "5min ago",
        comment:
          "Hi @everyone I’ve updated the presentation slides and spreadsheet as well. Please check it out! 🙏 cc @clivebixby cc I’ve corrected my mistakes there from last week.",
        attachments: [],
        reaction: { like: 5, comment: 3 },
        replies: [],
      },
    ],
  },
];
