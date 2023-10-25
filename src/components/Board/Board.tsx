import styles from "./Board.module.css";
import Typo from "../Typo";
import { useMediaQuery } from "usehooks-ts";
import { useOnMobile } from "@/config";

const Board = () => {
  const onMobile = useMediaQuery(useOnMobile);
  return (
    <div className={onMobile ? styles.wrapperMobile : styles.wrapper}>
      <Typo className={styles.header} color="yellow" variant="header4">
        БЕЗКОШТОВНО:
      </Typo>
      <ul className={onMobile ? styles.listMobile : styles.list}>
        <li>3D-СКАНУВАННЯ</li>
        <li>ДІАГНОСТИКА</li>
        <li>КОНСУЛЬТАЦІЯ ФІЗ. ТЕРАПЕВТА</li>
      </ul>
    </div>
  );
};

export default Board;
