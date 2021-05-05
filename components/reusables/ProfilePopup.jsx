import React from "react";
import {
  ButtonGroup,
  Modal,
  ModalCardFoot,
  Button,
  ModalCard,
  ModalCardTitle,
  ModalCardHead,
  ModalCardBody,
  Media,
  MediaItem,
  Image,
  Content,
} from "react-bulma-components";

export default function ProfilePopup() {
  return (
    <div className="profile-popup">
      <ButtonGroup renderAs={function noRefCheck() {}}>
        <Button color="info" onClick={function noRefCheck() {}}>
          Open Card Modal
        </Button>
      </ButtonGroup>
      <Modal onClose={function noRefCheck() {}}>
        <ModalCard>
          <ModalCardHead>
            <ModalCardTitle>Title</ModalCardTitle>
          </ModalCardHead>
          <ModalCardBody>
            <Media>
              <MediaItem align="left" renderAs="figure">
                <Image
                  alt="64x64"
                  size={64}
                  src="http://bulma.io/images/placeholders/128x128.png"
                />
              </MediaItem>
              <MediaItem>
                <Content>
                  <p>
                    <strong>John Smith</strong> <small>@johnsmith</small>{" "}
                    <small>31m</small>
                    <br />
                    If the children of the Modal is a card, the close button
                    will be on the Card Head instead than the top-right corner
                    You can also pass showClose = false to Card.Head to hide the
                    close button
                  </p>
                </Content>
              </MediaItem>
            </Media>
          </ModalCardBody>
          <ModalCardFoot
            align="right"
            hasAddons
            renderAs={function noRefCheck() {}}
          >
            <Button color="success">Like</Button>
            <Button>Share</Button>
          </ModalCardFoot>
        </ModalCard>
      </Modal>
    </div>
  );
}
