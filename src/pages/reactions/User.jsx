import React, { useEffect, useState } from "react";
import Container from "../../lib/TailwindComponents";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { Testing } from "../../components/Testing";

function User({ firebase, firestore }) {
  const [display, setDisplay] = useState("");
  const [name, setName] = useState("");
  const [success, setSuccess] = useState(false);
  const [displayVideo, setDisplayVideo] = useState(true);

  const [questions, setQuestions] = useState({
    question: "",
    questionTo: "",
  });

  const [comments, setComments] = useState({
    comment: "",
  });

  const [reactions, setReactions] = useState({
    reaction: "",
  });

  const [pledge, setPledge] = useState({
    name: "",
    pledge: "",
    pledgeType: "",
  });

  const commentsRef = firestore.collection("comments");
  const questionsRef = firestore.collection("questions");
  const reactionRef = firestore.collection("newReactions");
  const pledgeRef = firestore.collection("pledges");

  /// all send to database
  const sendReaction = async (e) => {
    e.preventDefault();
    setSuccess(true);

    setReactions({
      reaction: "",
    });
    await reactionRef.add({
      name: name,
      emojiReaction: reactions.reaction,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    });
  };

  const sendComments = async (e) => {
    e.preventDefault();
    setSuccess(true);

    setComments({
      comment: "",
    });
    await commentsRef.add({
      name: name,
      questionTo: comments.comment,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    });
  };

  const sendQuestions = async (e) => {
    e.preventDefault();
    setSuccess(true);

    setQuestions({
      question: "",
      questionTo: "",
    });
    await questionsRef.add({
      name: name,
      questionTo: questions.questionTo,
      question: questions.question,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    });
  };

  const sendPledges = async (e) => {
    e.preventDefault();
    setSuccess(true);

    setPledge({
      name: "",
      pledge: "",
      pledgeType: "",
    });
    await pledgeRef.add({
      name: name,
      pledge: pledge.pledge,
      pledgeType: pledge.pledgeType,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    });
  };

  // handling on changes
  const handleEmojiSelect = (emoji) => {
    setReactions((prevData) => ({
      ...prevData,
      reaction: emoji,
    }));
  };

  const handlePledgeType = (type) => {
    setPledge((prevData) => ({
      ...prevData,
      pledgeType: type,
    }));
  };

  function getPledgeDetails(pledgeType) {
    const selectedPledge = pledges.find(
      (item) => item.pledgeType === pledgeType
    );
    if (selectedPledge) {
      // Split the details string using the '|' delimiter
      return selectedPledge.details.split("|").map((part) => part.trim());
    }
    return [];
  }

  useEffect(() => {
    const url = new URL(window.location.href);
    const paramName = url.searchParams.get("name");

    if (paramName) {
      setName(paramName);
    }
  });

  const pledges = [
    {
      pledgeType: "Technology",
      details:
        "Is your pledge a technology-based solution or approach? | A donation pledge focused on technology can significantly help forcibly displaced people access different essential services in different ways. The services may facilitate access to financial services, and education opportunities, and provide mechanisms that enable displaced people to realize their potential. A technology-based donation pledge could | A technology-based donation pledge could also be an approach that enables UNHCR to facilitate different life-saving activities such as digital connectivity, data security and privacy, logistics and supply chain management, innovation initiatives, research and development. ",
    },
    {
      pledgeType: "Agriculture",
      details:
        "Is your pledge or donation agriculture-based? | Agriculture is more than just farming; it's the seed of hope for refugees and displaced people seeking to rebuild their lives. Your donation in this category can be a lifeline, providing the tools, training, and resources needed to cultivate self-sufficiency and prosperity. By supporting agriculture initiatives, you empower these resilient communities to grow their own food, create sustainable livelihoods, and foster a sense of belonging in their new homes. Your contribution enables them to harvest a brighter future, one crop at a time.",
    },
    {
      pledgeType: "Donation",
      details:
        "Is your pledge a donation? | Flexibility: unearmarked donations provide the organization with flexibility in how they allocate funds to respond to the most pressing needs. | Timely response: unearmarked funds enable UNHCR to respond swiftly to emerging crises without waiting for specific donor instructions or approval. Addressing neglected crises: unearmarked funds give UNHCR the freedom to direct resources to neglected areas, ensuring that vulnerable populations in less high-profile situations receive assistance.",
    },
    {
      pledgeType: "Partnership",
      details:
        "Partnerships are the bridges that connect compassion with impact. | Your donation in this category fuels collaboration between humanitarian organizations, governments, and local communities, creating a powerful force for change in the lives of refugees and displaced people. By supporting partnerships, you enable the pooling of resources, knowledge, and expertise to deliver more effective, coordinated, and sustainable aid. Your contribution fosters unity, efficiency, and innovation, ultimately helping these vulnerable populations find safety, rebuild their lives, and regain their dignity.",
    },
    {
      pledgeType: "Livelihood",
      details:
        "Does your pledge promote access to livelihoods for refugees and forcibly displaced people? | Pledges under this category will can be dedicated to initiatives that provide skills training, microfinance and entrepreneurship support, job placement, market access, and special assistance for women and vulnerable groups among displaced populations.",
    },
    {
      pledgeType: "Healthcare",
      details:
        "Does your pledge promote access to healthcare for refugees and forcibly displaced people? | A pledge or donation in this category can encompass a wide range of services, from preventative care to treatment of illnesses and injuries to maternal care to psychological support to building hospital facilities, this can ensure refugees, internally displaced people, and their host communities have access to lifesaving treatment facilities.",
    },
    {
      pledgeType: "Investment",
      details:
        "Is your donation an investment? | Investments in refugee areas are the cornerstone of resilience and renewal. Your donation in this category acts as a catalyst for change, supporting a spectrum of initiatives that ignite economic growth and self-reliance within displaced communities. By backing diversified investments, you're helping create jobs, stimulate local economies, and build vital infrastructure that benefits both refugees and their host communities. This multifaceted approach not only ensures refugees' immediate needs are met but also plants the seeds of long-term stability, fostering social integration and self-sufficiency.",
    },
  ];

  const colorOne = "#103254";
  const colorTwo = "#3976A3";
  return (
    <>
      <div
        onClick={() => setSuccess(false)}
        className={`fixed inset-0 z-[99999] ${
          success ? "bg-black pointer-events-auto" : " pointer-events-none"
        } bg-opacity-70 flex justify-center p-10 overflow-hidden`}
      >
        <div
          className={`${
            success ? "translate-y-0" : "translate-y-[-150%]"
          } relative bg-gray-100 w-fit h-fit p-8 rounded-lg drop-shadow-lg transition-all duration-300 ease-out`}
        >
          <h1>message sent successfully</h1>
        </div>
      </div>

      {/* <div
        onClick={() => setDisplayVideo(false)}
        className={`fixed inset-0 z-[99999] ${
          displayVideo ? "bg-black flex" : "hidden"
        } bg-opacity-70  justify-center items-center p-10 overflow-hidden`}
      >
        <div className=" space-y-4">
          <button
            onClick={() => setDisplayVideo(false)}
            className="w-full bg-red-400 text-white animate-bounce p-4 rounded-md font-medium text-2xl"
          >
            close window here
          </button>
          <video className=" relative md:max-w-[50vw] h-fit" controls>
            <source src="https://res.cloudinary.com/kaizen-img/video/upload/v1698907998/kaizen/2023-11-02_06-22-31_online-video-cutter.com.mp4" />
          </video>
        </div>
      </div> */}

      <div className="min-h-screen relative py-[20vh] flex items-center ">
        <img
          className="absolute bottom-0 opacity-60 pointer-events-none"
          src="/icons.png"
          alt=""
        />
        <img
          className="absolute top-[-5vh] rotate-180 opacity-40 pointer-events-none"
          src="/icons.png"
          alt=""
        />
        <Container className=" flex flex-col items-center justify-center h-full">
          <div className=" flex flex-col gap-8 max-w-[80vw] md:max-w-[50vw]">
            <div>
              <h1 className=" text-4xl font-medium">{`Akwaaba! ${name} 👋🏼`}</h1>
            </div>
            <button
              className={` bg-[#103254] p-4 rounded-md text-white text-2xl`}
            >
              <a
                href="https://amahorocoalition.com/afd-forum-2023/agenda-overview/"
                target="_blank"
              >
                Agenda
              </a>
            </button>

            <div className="join join-vertical w-full space-y-4">
              <div className="collapse collapse-arrow join-item border border-base-300">
                <input type="radio" name="my-accordion-4" />
                <div className="collapse-title text-xl font-medium">
                  <p>Send Question /Comment</p>
                </div>

                <div className="collapse-content flex flex-col gap-4">
                  <div className="flex gap-3 items-center">
                    <button
                      onClick={() => setDisplay("question")}
                      className={`${
                        display === "question"
                          ? "opacity-100 border-[.2rem] border-gray-900"
                          : "opacity-50"
                      } px-4 py-2 bg-[#3976A3] text-white rounded-lg`}
                    >
                      Send a question
                    </button>
                    <button
                      onClick={() => setDisplay("comment")}
                      className={`${
                        display === "comment"
                          ? "opacity-100 border-[.2rem] border-gray-900"
                          : "opacity-50"
                      } px-4 py-2 bg-[#3976A3] text-white rounded-lg`}
                    >
                      Send a comment
                    </button>
                  </div>
                  {display === "question" ? (
                    <form
                      onSubmit={sendQuestions}
                      className="flex flex-col gap-4 "
                    >
                      <div className="flex items-center gap-1">
                        <input
                          required
                          id="name"
                          type="text"
                          className=" border-2 p-2 rounded-md w-full"
                          placeholder="@ Who is this question to?"
                          value={questions.questionTo}
                          onChange={(e) =>
                            setQuestions((prevData) => ({
                              ...prevData,
                              questionTo: e.target.value,
                            }))
                          }
                        />
                      </div>
                      <div className="flex items-start gap-1">
                        <textarea
                          required
                          type="text"
                          className=" border-2 p-2 rounded-md min-h-12 resize-none w-full"
                          placeholder="Type questions here"
                          value={questions.question}
                          onChange={(e) =>
                            setQuestions((prevData) => ({
                              ...prevData,
                              question: e.target.value,
                            }))
                          }
                        />
                      </div>
                      <button
                        type="submit"
                        className={` p-2 px-4 bg-[#103254] text-white rounded-md `}
                      >
                        Send
                      </button>
                    </form>
                  ) : display === "comment" ? (
                    <form
                      onSubmit={sendComments}
                      className="flex flex-col gap-4 "
                    >
                      <div className="flex items-start gap-1">
                        <textarea
                          required
                          type="text"
                          className=" border-2 p-2 rounded-md min-h-12 resize-none w-full"
                          placeholder="Type comment here"
                          value={comments.comment}
                          onChange={(e) =>
                            setComments((prevData) => ({
                              ...prevData,
                              comment: e.target.value,
                            }))
                          }
                        />
                      </div>
                      <button
                        type="submit"
                        className={` p-2 px-4 bg-[#103254] text-white rounded-md `}
                      >
                        Send
                      </button>
                    </form>
                  ) : (
                    ""
                  )}
                </div>
              </div>

              <div className="collapse collapse-arrow join-item border border-base-300">
                <input type="radio" name="my-accordion-4" />
                <div className="collapse-title text-xl font-medium">
                  <p>Send a Reaction</p>
                </div>
                <form
                  onSubmit={sendReaction}
                  className=" flex flex-col w-full gap-4 collapse-content"
                >
                  <div className="flex justify-around w-full">
                    <button
                      type="button"
                      onClick={() => handleEmojiSelect("👏🏻")}
                      className={`${
                        reactions.reaction === "👏🏻"
                          ? "border-blue-500 border-4 bg-opacity-50"
                          : "border-black"
                      } p-2 border-2 border-opacity-50  rounded-md text-[2rem]`}
                    >
                      👏🏻
                    </button>
                    <button
                      type="button"
                      className={`${
                        reactions.reaction === "😁"
                          ? "border-blue-500 border-4 bg-opacity-50"
                          : "border-black"
                      } p-2 border-2 border-opacity-50  rounded-md text-[2rem]`}
                      onClick={() => handleEmojiSelect("😁")}
                    >
                      😁
                    </button>
                    <button
                      type="button"
                      className={`${
                        reactions.reaction === "😂"
                          ? "border-blue-500 border-4 bg-opacity-50"
                          : "border-black"
                      } p-2 border-2 border-opacity-50  rounded-md text-[2rem]`}
                      onClick={() => handleEmojiSelect("😂")}
                    >
                      😂
                    </button>
                    <button
                      type="button"
                      className={`${
                        reactions.reaction === "❤️"
                          ? "border-blue-500 border-4 bg-opacity-50"
                          : "border-black"
                      } p-2 border-2 border-opacity-50  rounded-md text-[2rem]`}
                      onClick={() => handleEmojiSelect("❤️")}
                    >
                      ❤️
                    </button>
                    <button
                      type="button"
                      className={`${
                        reactions.reaction === "👍🏻"
                          ? "border-blue-500 border-4 bg-opacity-50"
                          : "border-black"
                      } p-2 border-2 border-opacity-50  rounded-md text-[2rem]`}
                      onClick={() => handleEmojiSelect("👍🏻")}
                    >
                      👍🏻
                    </button>
                  </div>
                  <button
                    type="submit"
                    className={` p-2 px-4 bg-[#103254] text-white rounded-md `}
                  >
                    Send
                  </button>
                </form>
              </div>

              <div className="collapse collapse-arrow join-item border border-base-300">
                <input type="radio" name="my-accordion-4" />
                <div className="collapse-title text-xl font-medium">
                  <p>One-for-One Pledge</p>
                </div>
                <form
                  onSubmit={sendPledges}
                  className=" w-full flex flex-col gap-4  collapse-content"
                >
                  <div className="flex flex-wrap gap-4">
                    <div className="flex flex-col">
                      {" "}
                      <button
                        type="button"
                        onClick={() => handlePledgeType("Technology")}
                        className={`${
                          pledge.pledgeType === "Technology"
                            ? "border-blue-500 border-4 bg-opacity-50"
                            : "border-black"
                        } p-2 border-2 border-opacity-50  rounded-md text-[2rem]`}
                      >
                        <img
                          src="/icons/Technology LB.svg"
                          className="max-w-[50px]"
                          alt=""
                        />
                      </button>
                      <span className=" text-[1rem]">Technology</span>
                    </div>

                    <div className="flex flex-col">
                      <button
                        type="button"
                        className={`${
                          pledge.pledgeType === "Agriculture"
                            ? "border-blue-500 border-4 bg-opacity-50"
                            : "border-black"
                        } p-2 border-2 border-opacity-50  rounded-md text-[2rem]`}
                        onClick={() => handlePledgeType("Agriculture")}
                      >
                        <img
                          src="/icons/Agriculture LB.svg"
                          className="max-w-[50px]"
                          alt=""
                        />
                      </button>
                      <span className=" text-[1rem]">Agriculture</span>
                    </div>

                    <div className="flex flex-col">
                      {" "}
                      <button
                        type="button"
                        className={`${
                          pledge.pledgeType === "Donation"
                            ? "border-blue-500 border-4 bg-opacity-50"
                            : "border-black"
                        } p-2 border-2 border-opacity-50  rounded-md text-[2rem]`}
                        onClick={() => handlePledgeType("Donation")}
                      >
                        <img
                          src="/icons/Donation LB.svg"
                          className="max-w-[50px]"
                          alt=""
                        />
                      </button>
                      <span className=" text-[1rem]">Donation</span>
                    </div>

                    <div className="flex flex-col">
                      <button
                        type="button"
                        className={`${
                          pledge.pledgeType === "Healthcare"
                            ? "border-blue-500 border-4 bg-opacity-50"
                            : "border-black"
                        } p-2 border-2 border-opacity-50  rounded-md text-[2rem]`}
                        onClick={() => handlePledgeType("Healthcare")}
                      >
                        <img
                          src="/icons/Healthcare LB.svg"
                          className="max-w-[50px]"
                          alt=""
                        />
                      </button>
                      <span className=" text-[1rem]">Healthcare</span>
                    </div>

                    <div className="flex flex-col">
                      <button
                        type="button"
                        className={`${
                          pledge.pledgeType === "Partnership"
                            ? "border-blue-500 border-4 bg-opacity-50"
                            : "border-black"
                        } p-2 border-2 border-opacity-50  rounded-md text-[2rem]`}
                        onClick={() => handlePledgeType("Partnership")}
                      >
                        <img
                          src="/icons/Partnership LB 3.svg"
                          className="max-w-[50px]"
                          alt=""
                        />
                      </button>
                      <span className=" text-[1rem]">Partnership</span>
                    </div>

                    <div className="flex flex-col">
                      <button
                        type="button"
                        className={`${
                          pledge.pledgeType === "Investment"
                            ? "border-blue-500 border-4 bg-opacity-50"
                            : "border-black"
                        } p-2 border-2 border-opacity-50  rounded-md text-[2rem]`}
                        onClick={() => handlePledgeType("Investment")}
                      >
                        <img
                          src="/icons/Investment DB 3.svg"
                          className="max-w-[50px]"
                          alt=""
                        />
                      </button>
                      <span className=" text-[1rem]">Investment</span>
                    </div>
                    <div className=" flex flex-col">
                      <button
                        type="button"
                        className={`${
                          pledge.pledgeType === "Livelihood"
                            ? "border-blue-500 border-4 bg-opacity-50"
                            : "border-black"
                        } p-2 border-2 border-opacity-50  rounded-md text-[2rem]`}
                        onClick={() => handlePledgeType("Livelihood")}
                      >
                        <img
                          src="/icons/Livelihood DB.svg"
                          className="max-w-[50px]"
                          alt=""
                        />
                      </button>
                      <span className=" text-[1rem]">Livelihood</span>
                    </div>
                  </div>

                  <div className=" w-full">
                    {pledge.pledgeType ? (
                      <p className=" border-2 p-2 rounded-md w-full">
                        {pledge.pledgeType}
                      </p>
                    ) : (
                      <p>Please select</p>
                    )}
                  </div>

                  <div>
                    <div
                      className=" text-gray-400"
                      dangerouslySetInnerHTML={{
                        __html: getPledgeDetails(pledge.pledgeType).join(
                          "<br /> <br />"
                        ),
                      }}
                    />
                  </div>

                  <div className="flex flex-col items-start gap-1">
                    {pledge.pledgeType === "Technology" ? (
                      <textarea
                        required
                        type="text"
                        className=" border-2 p-2 rounded-md min-h-12 resize-none w-full"
                        placeholder="What do you pledge to do?"
                        value={pledge.pledge}
                        onChange={(e) =>
                          setPledge((prevData) => ({
                            ...prevData,
                            pledge: e.target.value,
                          }))
                        }
                      />
                    ) : pledge.pledgeType === "Agriculture" ? (
                      <textarea
                        required
                        type="text"
                        className=" border-2 p-2 rounded-md min-h-12 resize-none w-full"
                        placeholder="What do you pledge to do?"
                        value={pledge.pledge}
                        onChange={(e) =>
                          setPledge((prevData) => ({
                            ...prevData,
                            pledge: e.target.value,
                          }))
                        }
                      />
                    ) : pledge.pledgeType === "Healthcare" ? (
                      <textarea
                        required
                        type="text"
                        className=" border-2 p-2 rounded-md min-h-12 resize-none w-full"
                        placeholder="What do you pledge to do?"
                        value={pledge.pledge}
                        onChange={(e) =>
                          setPledge((prevData) => ({
                            ...prevData,
                            pledge: e.target.value,
                          }))
                        }
                      />
                    ) : pledge.pledgeType === "Investment" ? (
                      <textarea
                        required
                        type="text"
                        className=" border-2 p-2 rounded-md min-h-12 resize-none w-full"
                        placeholder="What do you pledge to do?"
                        value={pledge.pledge}
                        onChange={(e) =>
                          setPledge((prevData) => ({
                            ...prevData,
                            pledge: e.target.value,
                          }))
                        }
                      />
                    ) : pledge.pledgeType === "Donation" ? (
                      <textarea
                        required
                        type="text"
                        className=" border-2 p-2 rounded-md min-h-12 resize-none w-full"
                        placeholder="What do you pledge to do?"
                        value={pledge.pledge}
                        onChange={(e) =>
                          setPledge((prevData) => ({
                            ...prevData,
                            pledge: e.target.value,
                          }))
                        }
                      />
                    ) : pledge.pledgeType === "Livelihood" ? (
                      <textarea
                        required
                        type="text"
                        className=" border-2 p-2 rounded-md min-h-12 resize-none w-full"
                        placeholder="What do you pledge to do?"
                        value={pledge.pledge}
                        onChange={(e) =>
                          setPledge((prevData) => ({
                            ...prevData,
                            pledge: e.target.value,
                          }))
                        }
                      />
                    ) : pledge.pledgeType === "Partnership" ? (
                      <textarea
                        required
                        type="text"
                        className=" border-2 p-2 rounded-md min-h-12 resize-none w-full"
                        placeholder="What do you pledge to do?"
                        value={pledge.pledge}
                        onChange={(e) =>
                          setPledge((prevData) => ({
                            ...prevData,
                            pledge: e.target.value,
                          }))
                        }
                      />
                    ) : (
                      ""
                    )}
                  </div>

                  <button
                    type="submit"
                    className={` p-2 px-4 bg-[#103254] text-white rounded-md `}
                  >
                    Send
                  </button>
                </form>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}

export default User;
