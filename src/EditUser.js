import React from "react";
import { Modal, ModalBody, ModalHeader } from "react-bootstrap";
import { Formik } from "formik";

export default function EditUser({
  user,
  updateUser,
  showEModal,
  setShowEModal,
}) {
  return (
    <>
      <Modal show={showEModal} onHide={() => setShowEModal(false)}>
        <ModalHeader closeButton={() => setShowEModal(false)} />
        <ModalBody>
          <Formik
            initialValues={user}
            onSubmit={(values) => updateUser(values)}
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
                    Update
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
