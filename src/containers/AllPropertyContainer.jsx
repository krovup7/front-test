import React from "react";
import { useSelector } from "react-redux";
import { AllProperty } from "../component/AllProperty/AllProperty";
import { useDispatch } from "react-redux";
import { deleteProperty } from "../redux/actions/PropertiesAction";

export const AllPropertyContainer = (props) => {
  const dispatch = useDispatch();
  let properties = useSelector((state) => state.properties.properties);
  const deleteProp = (id) => {
    dispatch(deleteProperty(id));
  };
  const routeChange = () => {
    let path = "/AddProperty";
    props.history.push(path);
  };
  return (
    <AllProperty
      deleteProperty={deleteProp}
      properties={properties}
      routeChange={routeChange}
    />
  );
};
