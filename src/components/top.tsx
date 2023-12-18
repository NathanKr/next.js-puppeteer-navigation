import React, { FC } from "react";
import Link from "next/link";
import styles from '@/styles/top.module.css'


const Top: FC = () => {
  return (
    <div className={styles.container}>
      <Link href="/">Home</Link>
      <Link href="/page2">Page2</Link>
      <Link href="/page3">Page3</Link>
    </div>
  );
};

export default Top;
