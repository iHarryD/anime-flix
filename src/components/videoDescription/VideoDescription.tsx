import { faChevronDown, faCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  BulletContainer,
  DescriptionTextButton,
  ViewUploadDateContainer,
} from "../styled/SingleVideoComponents.styled";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

export default function VideoDescription() {
  const [bool, setBool] = useState<boolean>(false);
  return (
    <div>
      <ViewUploadDateContainer>
        <span>74 views</span>
        <BulletContainer>
          <FontAwesomeIcon icon={faCircle} />
        </BulletContainer>
        <span>12/04/2012</span>
      </ViewUploadDateContainer>
      <div>
        <DescriptionTextButton onClick={() => setBool(!bool)}>
          <p>Click to exand description</p>
          <FontAwesomeIcon icon={faChevronDown} />
        </DescriptionTextButton>
      </div>
      <AnimatePresence>
        {bool && (
          <motion.div
            initial={{ height: 0, opacity: 0, transformOrigin: "top" }}
            animate={{
              height: "fit-content",
              opacity: 1,
              transformOrigin: "top",
            }}
            exit={{ height: 0, opacity: 0, transformOrigin: "top" }}
          >
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde,
            magnam officiis maiores quia ducimus suscipit beatae culpa nostrum
            similique eos accusantium voluptas eligendi iure. Nostrum cum odit
            quidem voluptatum illo repellat. Saepe maiores libero eius
            voluptatem alias sed commodi ex tempora numquam. Dignissimos,
            quisquam corrupti! Quo modi sapiente pariatur quis sequi
            necessitatibus corporis quidem cupiditate amet aut, omnis eum sint
            vel deserunt autem ab numquam dolores obcaecati distinctio
            laboriosam nihil temporibus? Minima, illo fugit nemo ipsam modi quia
            cumque maiores, eum doloribus, consequatur totam! Possimus officia
            recusandae ipsum nam sunt doloribus qui aperiam, consectetur cum
            nulla at unde? Dolorum, voluptate.
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
