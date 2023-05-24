import { TopPageComponentProps } from "./TopPageComponent.props";
import styles from "./TopPageComponent.module.css";
import cn from "classnames";
import {
  Advantages,
  HTag,
  HhData,
  Paragraph,
  Sort,
  Tag,
} from "@/app/components";
import { TopLevelCategory } from "../../interfaces/page.interface";
import { SortEnum } from "@/app/components/Sort/Sort.props";
import { useReducer } from "react";
import { sortReducer } from "./sort.reducer";

export const TopPageComponen = ({
  page,
  products,
  firstCategory,
}: TopPageComponentProps): JSX.Element => {
  // функция редюсера для сортировки
  const [{ products: sortedProducts, sort }, dispatchSort] = useReducer(
    sortReducer,
    { products, sort: SortEnum.Rating }
  );

  // функция смены setSort через диспатч
  const setSort = (sort: SortEnum) => {
    dispatchSort({ type: sort });
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
        <HTag tag="h1">{page.title}</HTag>
        {products && (
          <Tag color="grey" size="m">
            {products.length}
          </Tag>
        )}
        <Sort sort={sort} setSort={setSort} />
      </div>
      <div>
        {sortedProducts &&
          sortedProducts.map((p) => <div key={p._id}>{p.title}</div>)}
      </div>
      <div className={styles.hhtitle}>
        <HTag tag="h2">Вакансии -{page.category}</HTag>
        <Tag color="red" size="m">
          hh.ru
        </Tag>
      </div>
      {firstCategory == TopLevelCategory.Courses && page.hh && (
        <HhData {...page.hh} />
      )}
      {page.advantages && page.advantages.length > 0 && (
        <>
          <HTag tag="h2">Преимущества</HTag>
          <Advantages advantages={page.advantages} />
        </>
      )}
      {page.seoText && (
        <div
          className={styles.seo}
          dangerouslySetInnerHTML={{ __html: page.seoText }}
        />
      )}
      <HTag tag="h2">Получаемые навыки</HTag>
      {page.tags.map((t) => (
        <Tag key={t} color="primary">
          {t}
        </Tag>
      ))}
    </div>
  );
};
