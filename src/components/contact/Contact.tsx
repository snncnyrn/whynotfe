import * as Dialog from "@radix-ui/react-dialog";
import { BsTelephoneFill } from "react-icons/bs";
import { IoMail, IoClose } from "react-icons/io5";

import Button from "../button/Button";
import styles from "./ContactStyles.module.scss";

const Contact = () => {
  return (
    <div style={{ marginBottom: "5px" }}>
      <Dialog.Root>
        <Dialog.Trigger asChild>
          <Button>İletişim</Button>
        </Dialog.Trigger>
        <Dialog.Portal>
          <Dialog.Overlay className={styles.overlay} />
          <Dialog.Content className={styles.content}>
            <Dialog.Title className={styles.title}>İletişim</Dialog.Title>
            <Dialog.Description className={styles.description}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  gap: "0.5rem",
                }}
              >
                <BsTelephoneFill style={{ marginTop: "5px" }} size={25} />
                +90 554 261 12 69
              </div>
            </Dialog.Description>
            <Dialog.Description
              style={{ marginBottom: 0 }}
              className={styles.description}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  gap: "0.5rem",
                }}
              >
                <IoMail style={{ marginTop: "5px" }} size={25} />
                snncnyrn@gmail.com
              </div>
            </Dialog.Description>
            <Dialog.Close asChild>
              <div className={styles.closeBtn}>
                <Button aria-label="Close">
                  <IoClose size={25} />
                </Button>
              </div>
            </Dialog.Close>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  );
};

export default Contact;
