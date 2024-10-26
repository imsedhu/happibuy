/* eslint-disable react/jsx-no-target-blank */
import React, { useState } from "react";
import blogList from "../../utilis/blogdata";
import { useParams } from "react-router-dom";
import PageHeader from "../../components/PageHeader";
import Tags from "../shop/Tags";
import PopularPost from "../shop/PopularPost";

const socialList = [
  {
    iconName: "icofont-facebook",
    siteLink: "#",
    className: "facebook",
  },
  {
    iconName: "icofont-twitter",
    siteLink: "#",
    className: "twitter",
  },
  {
    iconName: "icofont-linkedin",
    siteLink: "#",
    className: "linkedin",
  },
  {
    iconName: "icofont-instagram",
    siteLink: "#",
    className: "instagram",
  },
  {
    iconName: "icofont-pinterest",
    siteLink: "#",
    className: "pinterest",
  },
];

const SingleBlog = () => {
  const [blog, setBlog] = useState(blogList);
  const { id } = useParams();
  const result = blog.filter((b) => b.id === Number(id));
  return (
    <div>
      <PageHeader
        title={"Single Blog Pages"}
        currentPage={"Blog/ Blog Details"}
      />

      <div className="blog-section blog-single padding-tb section-bg">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-12">
              <article>
                <div className="section-wrapper">
                  <div className="row row-cols-1 justify-content-center g-4">
                    <div className="col">
                      <div className="post-item style-2">
                        <div className="post-inner">
                          {result.map((item) => (
                            <div key={item.id}>
                              <div className="post-thumb">
                                <img
                                  src={item.imgUrl}
                                  alt=""
                                  className="w-100"
                                />
                              </div>

                              {/* post content */}
                              <div className="post-content">
                                <h3>{item.title}</h3>
                                <div className="meta-post">
                                  <ul className="lab-ul">
                                    {item.metaList.map((val, i) => (
                                      <li key={i}>
                                        <i className={val.iconName}></i>
                                        {val.text}
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                                <p>
                                  Lorem ipsum dolor sit amet consectetur
                                  adipisicing elit. Distinctio magnam nisi
                                  asperiores veritatis repellat voluptatem
                                  aliquam porro neque eveniet dignissimos
                                  veniam, hic recusandae saepe dolor inventore,
                                  numquam iste. Eum, quo?Lorem ipsum dolor sit,
                                  amet consectetur adipisicing elit. At
                                  veritatis cupiditate totam. Deleniti dolores
                                  tempora modi dolorum fugiat nobis maxime
                                  recusandae alias, nesciunt aperiam officia
                                  esse ex voluptates voluptatibus. Sed?
                                </p>

                                <blockquote>
                                  <p>
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Commodi dolor aut modi
                                    corporis, impedit distinctio omnis eos vitae
                                    quasi ratione? Laborum dolores sed
                                    voluptatibus unde sit ab deleniti doloremque
                                    vel!
                                  </p>
                                  <cite>
                                    <a href="#">...melissa Hunter</a>
                                  </cite>
                                </blockquote>

                                <p>
                                  Lorem ipsum dolor sit amet consectetur
                                  adipisicing elit. Distinctio magnam nisi
                                  asperiores veritatis repellat voluptatem
                                  aliquam porro neque eveniet dignissimos
                                  veniam, hic recusandae saepe dolor inventore,
                                  numquam iste. Eum, quo?Lorem ipsum dolor sit,
                                  amet consectetur adipisicing elit. At
                                  veritatis cupiditate totam. Deleniti dolores
                                  tempora modi dolorum fugiat nobis maxime
                                  recusandae alias, nesciunt aperiam officia
                                  esse ex voluptates voluptatibus. Sed?
                                </p>

                                <img
                                  src="/src/assets/images/blog/single/01.jpg"
                                  alt=""
                                />

                                <p>
                                  Lorem ipsum dolor sit amet consectetur
                                  adipisicing elit. Distinctio magnam nisi
                                  asperiores veritatis repellat voluptatem
                                  aliquam porro neque eveniet dignissimos
                                  veniam, hic recusandae saepe dolor inventore,
                                  numquam iste. Eum, quo?Lorem ipsum dolor sit,
                                  amet consectetur adipisicing elit. At
                                  veritatis cupiditate totam. Deleniti dolores
                                  tempora modi dolorum fugiat nobis maxime
                                  recusandae alias, nesciunt aperiam officia
                                  esse ex voluptates voluptatibus. Sed?
                                </p>

                                <div className="video-thumb">
                                  <img
                                    src="/src/assets/images/blog/single/02.jpg"
                                    alt=""
                                  />
                                  <a
                                    href="https://youtu.be/Uv7cKlZFXU8?feature=shared"
                                    className="video-button popup"
                                    target="_blank"
                                  >
                                    <i className="icofont-ui-play"></i>
                                  </a>
                                </div>

                                <p>
                                  Lorem ipsum dolor sit amet consectetur
                                  adipisicing elit. Distinctio magnam nisi
                                  asperiores veritatis repellat voluptatem
                                  aliquam porro neque eveniet dignissimos
                                  veniam, hic recusandae saepe dolor inventore,
                                  numquam iste. Eum, quo?Lorem ipsum dolor sit,
                                  amet consectetur adipisicing elit. At
                                  veritatis cupiditate totam. Deleniti dolores
                                  tempora modi dolorum fugiat nobis maxime
                                  recusandae alias, nesciunt aperiam officia
                                  esse ex voluptates voluptatibus. Sed?
                                </p>

                                <div className="tags-section">
                                  <ul className="tags lab-ul">
                                    <li>
                                      <a href="#">Agency</a>
                                    </li>
                                    <li>
                                      <a href="#">Business</a>
                                    </li>
                                    <li>
                                      <a href="#">Personal</a>
                                    </li>
                                  </ul>
                                  <ul className="lab-ul social-icons">
                                    {socialList.map((val, i) => (
                                      <li key={i}>
                                        <a href="#" className={val.className}>
                                          <i className={val.iconName}></i>
                                        </a>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                       {/* blo post navigation */}
                    <div className="navigations-part">
                      <div className="left">
                        <a href="#" className="prev">
                          <i className="icofont-double-left"></i> Previous Blog
                        </a>
                        <a href="#" className="title">
                          Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </a>
                      </div>
                      <div className="right">
                        <a href="#" className="prev">
                          <i className="icofont-double-right"></i> Next Blog
                        </a>
                        <a href="#" className="title">
                          Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </a>
                      </div>
                    </div>
                    </div>
                  </div>
                </div>
              </article>
            </div>


            <div className="col-lg-4 col-12">
              <aside>
                <Tags />
                <PopularPost />
              </aside>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleBlog;
