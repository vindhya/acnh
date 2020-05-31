import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  Submit,
} from '@redwoodjs/web'

import { parseCritterForGql } from 'src/utils'

const FishCritterForm = (props) => {
  const onSubmit = (data) => {
    props.onSave(parseCritterForGql(data), props?.fishCritter?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />

        <Label
          name="name"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Name
        </Label>
        <TextField
          name="name"
          defaultValue={props.fishCritter?.name}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="name" className="rw-field-error" />

        <Label
          name="image"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Image
        </Label>
        <TextField
          name="image"
          defaultValue={props.fishCritter?.image}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="image" className="rw-field-error" />

        <Label
          name="price"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Price
        </Label>
        <TextField
          name="price"
          defaultValue={props.fishCritter?.price}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="price" className="rw-field-error" />

        <Label
          name="location"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Location
        </Label>
        <TextField
          name="location"
          defaultValue={props.fishCritter?.location}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="location" className="rw-field-error" />

        <Label
          name="shadowSize"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Shadow Size
        </Label>
        <TextField
          name="shadowSize"
          defaultValue={props.fishCritter?.shadowSize}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="shadowSize" className="rw-field-error" />

        <Label
          name="timeStart"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Start Time
        </Label>
        <TextField
          name="timeStart"
          defaultValue={props.fishCritter?.timeStart}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="timeStart" className="rw-field-error" />

        <Label
          name="timeEnd"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          End Time
        </Label>
        <TextField
          name="timeEnd"
          defaultValue={props.fishCritter?.timeEnd}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="timeEnd" className="rw-field-error" />

        <Label
          name="timeStartAlt"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Alternate Start Time
        </Label>
        <TextField
          name="timeStartAlt"
          defaultValue={props.fishCritter?.timeStartAlt}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />
        <FieldError name="timeStartAlt" className="rw-field-error" />

        <Label
          name="timeEndAlt"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Alternate End Time
        </Label>
        <TextField
          name="timeEndAlt"
          defaultValue={props.fishCritter?.timeEndAlt}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />
        <FieldError name="timeEndAlt" className="rw-field-error" />

        <Label
          name="monthsNorthHemi"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Months - Northern Hemisphere
        </Label>
        <TextField
          name="monthsNorthHemi"
          defaultValue={props.fishCritter?.monthsNorthHemi}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="monthsNorthHemi" className="rw-field-error" />

        <Label
          name="monthsSouthHemi"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Months - Southern Hemisphere
        </Label>
        <TextField
          name="monthsSouthHemi"
          defaultValue={props.fishCritter?.monthsSouthHemi}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="monthsSouthHemi" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default FishCritterForm
