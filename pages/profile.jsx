import React from "react";
import Global from "@components/reusables/Global";
import { Container, Button } from "react-bulma-components";
import { useSession, signIn } from "next-auth/client";

export default function Profile() {
  const [session, loading] = useSession();

  if (typeof window !== "undefined" && loading) return null;
  if (!session)
    return (
      <Global title="Water Company: Sign In">
        <Container className="has-text-centered	unsigned-page">
          <h1 className="title is-size-3">Sign In to Continue</h1>
          <Button className="is-link" onClick={signIn}>
            Sign In
          </Button>
        </Container>
      </Global>
    );

  return (
    <div className="profile-page">
      <Global title="Water Company: Profile">
        <Container className="page-container">
          <div className="profile-pic_container">
            <img src={session.user.image} width={200} />
          </div>
          <p className="title is-size-3 name">{session.user.name}</p>
        </Container>
      </Global>
    </div>
  );
}
