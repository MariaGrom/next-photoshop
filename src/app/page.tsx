// import { GetStaticProps } from "next";
"use client";
import React, { useState } from "react";
import { Button, HTag, Paragraph, Tag, Rating } from "./components";
import styles from "./page.module.css";
import { withLayout } from "../../layout/Layout";
import axios from "axios";
import { MenuItem } from "../../interfaces/menu.interface";

function Home(): JSX.Element {
  const [rating, setRating] = useState<number>(4);

  return (
    <>
      <HTag tag="h2">Title</HTag>
      <Button appearance="primary" arrow="down">
        Кнопка
      </Button>
      <Button appearance="ghost" arrow="right">
        Кнопка
      </Button>
      <Paragraph size="s">Мелкий параграф</Paragraph>
      <Paragraph>Средний параграф</Paragraph>
      <Paragraph size="l">Крупный параграф</Paragraph>
      <Tag size="s" color="ghost">
        {" "}
        ghost
      </Tag>
      <Tag size="s" color="red">
        red
      </Tag>
      <Tag size="s" color="grey">
        grey
      </Tag>
      <Tag size="s" color="green">
        green
      </Tag>
      <Tag size="m" color="primary">
        primary
      </Tag>

      <Rating rating={rating} isEditable setRating={setRating} />
    </>
  );
}

export default withLayout(Home);

// export const getStaticProps: GetStaticProps<HomeProps> = async () => {
//   const firstCategory = 0;
//   const { data: menu } = await axios.post<MenuItem[]>(
//     process.env.NEXT_PUBLIC_DOMAIN + "/api/top-page/find", {
//       firstCategory
//     }
//   );
//   return {
//     props: {
//       menu,
//       firstCategory
//     },
//   };
// };

// // Типизация пропсов 
// interface HomeProps extends Record<string,unknown>{
//   menu: MenuItem[];
//   firstCategory: number;
// }