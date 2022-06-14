import React from "react";
import { Modal, ModalBody, ModalHeader } from "react-bootstrap";
import { Formik } from "formik";

export default function CreateUser({ showModal, setShowModal, addUser }) {
  return (
    <>
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <ModalHeader closeButton={() => setShowModal(false)} />
        <ModalBody>
          <Formik
            initialValues={{
              name: "",
              userName: "",
            }}
            onSubmit={(values) => addUser(values)}
          >
            {({ handleSubmit, handleChange, values }) => (
              <>
                <form onSubmit={handleSubmit}>
                  <label htmlFor="name">Name</label>
                  <input
                    id="name"
                    className="form-control mb-2"
                    type="text"
                    name="name"
                    onChange={handleChange}
                    value={values.name}
                  />

                  <label htmlFor="userName">Username</label>

                  <input
                    id="userName"
                    className="form-control"
                    type="text"
                    name="userName"
                    onChange={handleChange}
                    value={values.userName}
                  />
                  <button className="btn btn-primary mt-3" type="submit">
                    Add
                  </button>
                </form>
              </>
            )}
          </Formik>
        </ModalBody>
      </Modal>
    </>
  );
}
