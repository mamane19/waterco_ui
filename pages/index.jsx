import React, { useState, useEffect } from "react";
import Global from "@components/reusables/Global";
import Header from "@components/reusables/Header";
import TableRow from "@components/reusables/TableRow";
import Signup from "@components/unique/Signup";
import { Box, Columns, Button } from "react-bulma-components";
import { GoSettings } from "react-icons/go";
import { BiFilterAlt } from "react-icons/bi";
import { BsPersonPlusFill } from "react-icons/bs";
import { signOut, useSession } from "next-auth/client";
import redirect from "nextjs-redirect";

export default function HomePage() {
  const [session, loading] = useSession();
  // eslint-disable-next-line no-unused-vars
  const [isSigned, setIsSigned] = useState(false);

  useEffect(() => {
    const fetchAuthState = async () => {
      const res = await fetch("/api/private");
      const authState = await res.json();
      if (authState.isSigned) setIsSigned(authState.isSigned);
      else redirect("/signup");
    };
    fetchAuthState();
  }, [session]);

  if (typeof window !== "undefined" && loading) return null;
  if (!session) return <Signup />;

  return (
    <div className="home">
      <Global title="Water Company: Welcome">
        <Header
          username={session.user.name}
          profileURL={session.user.image}
          handleSignOut={signOut}
        />
        <div className="content">
          <div className="page-title">
            <Columns>
              <Columns.Column>
                <h1 className="title is-size-5">Clients(0)</h1>
              </Columns.Column>
              <div className="end">
                <Columns>
                  <Columns.Column>
                    <Button>
                      <BiFilterAlt />
                      <span>Filter</span>
                    </Button>
                  </Columns.Column>
                  <Columns.Column>
                    <Button>
                      <GoSettings />
                      <span>Manage</span>
                    </Button>
                  </Columns.Column>
                  <Columns.Column>
                    <Button className="is-link">
                      <BsPersonPlusFill />
                      <span>Add New</span>
                    </Button>
                  </Columns.Column>
                </Columns>
              </div>
            </Columns>
          </div>
          <Box>
            <TableRow
              className="title-row"
              client="Client"
              route="Routes"
              lastPaymentDate="Last Payment Date"
              premises="Premises"
              energy="Total Energy used"
            />
            <hr size={1} />
          </Box>
        </div>
      </Global>
    </div>
  );
}
