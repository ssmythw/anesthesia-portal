import React, { useEffect, useState } from "react";
import Banner from "../../components/Banner/Banner";
import PeopleIcon from "@mui/icons-material/People";
import Card from "@mui/material/Card";
import axios from "axios";
import "./Staff.scss";
import { Grid, Pagination } from "@mui/material";
import usePagination from "./Pagination";

const Staff = () => {
  const [staff, setStaff] = useState([]);
  const [page, setPage] = useState(1);
  const PER_PAGE = 5;
  const count = Math.ceil(staff.length / PER_PAGE);
  const _DATA = usePagination(staff, PER_PAGE);

  useEffect(() => {
    const fetchStaff = async () => {
      const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
      setStaff(res.data);
    };
    fetchStaff();
  }, []);

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
      <div className="staff">
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
      </div>
    </>
  );
};

export default Staff;
