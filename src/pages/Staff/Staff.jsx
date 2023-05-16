import React, { useEffect, useState } from "react";
import Banner from "../../components/Banner/Banner";
import PeopleIcon from "@mui/icons-material/People";
import Card from "@mui/material/Card";
import axios from "axios";
import "./Staff.scss";
import { Container, Grid, Pagination, Typography } from "@mui/material";
import usePagination from "./Pagination";
import TextField from "@mui/material/TextField";
import { reveal } from "../../utils/reveal";
import Footer from "../../components/Footer/Footer";

const Staff = () => {
  const [staff, setStaff] = useState([]);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const PER_PAGE = 4;
  const count = Math.ceil(staff.length / PER_PAGE);
  const _DATA = usePagination(staff, PER_PAGE);

  useEffect(() => {
    reveal();
    window.addEventListener("scroll", reveal);
    const fetchStaff = async () => {
      const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
      setStaff(res.data);
    };
    fetchStaff();
  }, []);

  console.log(_DATA);

  const handleChange = (e, p) => {
    setPage(p);
    _DATA.jump(p);
  };

  return (
    <>
      <Banner
        name="Staff"
        icon={<PeopleIcon className="svg_icons" fontSize="xl" />}
      />
      <div className="reveal fade-right">
        <Container maxWidth="md" className="">
          <br />
          <br />
          <div className="header">
            <hr
              style={{
                width: "50px",
                display: "inline-block",
              }}
              className="hr"
            />
            <span className="hr">&nbsp;&nbsp;&nbsp;&nbsp;</span>
            <Typography style={{ display: "inline-block" }} variant="h4">
              Our Team
            </Typography>
          </div>
          {/* <div className="staff">
            <Grid container spacing={2}>
              {_DATA.currentData().map((staff) => (
                <Grid item xs={12} md={6} key={staff.id}>
                  <Card style={{ margin: "20px 0px", height: "200px" }}>
                    {staff.title}
                  </Card>
                </Grid>
              ))}
            </Grid>
            <Pagination
              count={count}
              size="large"
              page={page}
              variant="outlined"
              shape="rounded"
              onChange={handleChange}
            />
          </div> */}
        </Container>
      </div>
    </>
  );
};

export default Staff;
