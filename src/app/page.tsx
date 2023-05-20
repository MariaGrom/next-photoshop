"use client";

import React, { useEffect, useState } from "react";
import { Button, HTag, Paragraph, Tag, Rating } from "./components";
import styles from "./page.module.css";

export default function Home(): JSX.Element {
  const [rating, setRating] = useState<number>(4);



  return (
    <>
      <HTag tag="h2">Title</HTag>
      <Button appearance="primary"arrow="down">
        Кнопка
      </Button>
      <Button appearance="ghost" arrow="right">
        Кнопка
      </Button>
      <Paragraph size="s">Мелкий параграф</Paragraph>
      <Paragraph>Средний параграф</Paragraph>
      <Paragraph size="l">Крупный параграф</Paragraph>
      <Tag size="s" color="ghost"> ghost</Tag>
      <Tag size="s" color="red">red</Tag>
      <Tag size="s" color="grey">grey</Tag>
      <Tag size="s" color="green">green</Tag>
      <Tag size="m" color="primary">primary</Tag>
      <Rating rating={rating} isEditable setRating={setRating}/>
    </>
  );
}
