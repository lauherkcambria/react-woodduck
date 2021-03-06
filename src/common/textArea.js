import React from 'react'

const TextAreaComponent = ({gridClassName, labelClassName, id, label, onChange, value, placeholder, type}) => (
  <div className={gridClassName}>
    <div>
      <label className={labelClassName} htmlFor={id}>{label}</label>
      <textarea id={id} type={type} placeholder={placeholder} value={value} onChange={onChange} />
    </div>
  </div>
)


class TextArea extends React.Component {
	render () {
		return (
			<div>
			<TextAreaComponent  />
</div>
		)
	}
}

export default TextArea
