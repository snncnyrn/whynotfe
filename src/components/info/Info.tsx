import * as Dialog from "@radix-ui/react-dialog";
import Button from "../button/Button";
import { IoClose } from "react-icons/io5";
import styles from "./InfoStyles.module.scss";

const Info = () => {
  return (
    <div style={{ marginBottom: "5px" }}>
      <Dialog.Root>
        <Dialog.Trigger asChild>
          <Button>Hakkımızda</Button>
        </Dialog.Trigger>
        <Dialog.Portal>
          <Dialog.Overlay className={styles.overlay} />
          <Dialog.Content className={styles.content}>
            <Dialog.Title className={styles.title}>Hakkımızda</Dialog.Title>
            <Dialog.Description className={styles.description}>
              <b>Why Not</b>, müziğin sadece bir arka plan değil, aynı zamanda
              hislerin de sesi olduğu bilinciyle hareket ediyor. Özel gününüzü
              sizin duygularınızla aynı frekansta çalıp yaşayan bir grupla
              çalışmak isterseniz doğru yerdesiniz. İstanbul düğün ve event
              müzik grupları içinde yer alan ekip, sahnede sadece müzik yapmakla
              kalmıyor, etkinliğinize enerji, eğlence ve samimiyet getiriyor.
              <br />
              <br />
              Bireysel Ustalıktan Kolektif Güce <br />
              <b>Why Not</b>, sahnede yeni bir isim olabilir; ama bu ekibin her
              bir üyesi, yıllardır müziğin tam kalbinde. 20 yıla yayılan
              bireysel kariyerlerimiz boyunca Türkiye’nin dört bir yanında,
              festivallerden dev konserlere, eventlerden sahne şovlarına kadar
              sayısız organizasyonda çaldık. Birçok tanınmış sanatçıyla
              çalıştık, sahnede binlerce anı biriktirdik. Şimdi o birikimleri
              tek bir çatı altında topladık. Why Not, işte bu yüzden sıradan bir
              müzik grubu değil; tecrübeyle enerjiyi birleştiren yepyeni bir
              sahne ruhu.
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

export default Info;
