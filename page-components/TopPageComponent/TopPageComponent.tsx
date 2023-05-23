import { TopPageComponentProps } from "./TopPageComponent.props";
import styles from "./TopPageComponent.module.css";
import cn from "classnames";
import { HTag, HhData, Tag } from "@/app/components";
import { TopLevelCategory } from "../../interfaces/page.interface";

export const TopPageComponen = ({
  page,
  products,
  firstCategory,
}: TopPageComponentProps): JSX.Element => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
        <HTag tag="h1">{page.title}</HTag>
        {products && (<Tag color="grey" size="m">{products.length}</Tag>)}
        <span>сортировка</span>
      </div>
      <div>
      {products && products.map(p => (<div key={p._id}>{p.title}</div>))}
      </div>
      <div className={styles.hhtitle}>
        <HTag tag="h2">Вакансии -{page.category}</HTag>
         <Tag color="red" size="m">hh.ru</Tag>
      </div>
      {firstCategory == TopLevelCategory.Courses && <HhData {...page.hh}/>}
    </div>
  );
};
