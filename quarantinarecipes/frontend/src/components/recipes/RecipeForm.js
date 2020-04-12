import React, { Component } from "react";
import { Field, reduxForm, reset } from "redux-form";

class RecipeForm extends Component {
  renderError({ error, touched }) {
    if (touched && error) {
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      );
    }
  }
  renderInput = ({ input, label, meta }) => {
    const className = `field ${meta.error && meta.touched ? "error" : ""}`;
    return (
      <div className={className}>
        <label>{label}</label>
        <input {...input} autoComplete="off" />
        {this.renderError(meta)}
      </div>
    );
  };

  onSubmit = (formValues) => {
    const { reset } = this.props;
    this.props.onSubmit(formValues);
    reset();
  };

  renderFileInput = ({ input, dataAllowedFileExtensions, label }) => {
    const onInputChange = (e) => {
      e.preventDefault();
      const file = e.target.files[0];
      console.log(file);
      input.onChange(file);
    };
    return (
      <div className="field">
        <label>{label}</label>
        <input
          type="file"
          onChange={onInputChange}
          data-allowed-file-extensions={dataAllowedFileExtensions}
        />
      </div>
    );
  };
  render() {
    return (
      <div>
        <form
          onSubmit={this.props.handleSubmit(this.onSubmit)}
          className="ui form error"
        >
          <Field name="name" component={this.renderInput} label="Recipe Name" />
          <Field
            name="ingredients"
            component={this.renderInput}
            label="Ingredients"
          />
          <Field
            name="instructions"
            component={this.renderInput}
            label="Instructions"
          />
          <Field
            name="image"
            component={this.renderFileInput}
            type="file"
            label="Image"
            dataAllowedFileExtensions="jpg png bmp"
          />
          <button className="ui button primary">Submit</button>
        </form>
      </div>
    );
  }
}

const validate = (formValues) => {
  const errors = {};
  if (!formValues.name) {
    errors.name = "You must enter recipe name";
  }
  if (!formValues.ingredients) {
    errors.ingredients = "You must enter ingredients";
  }
  if (!formValues.instructions) {
    errors.instructions = "You must enter instructions";
  }
  return errors;
};

export default reduxForm({
  form: "recipeForm",
  validate: validate,
})(RecipeForm);
