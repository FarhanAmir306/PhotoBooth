import React from 'react'

export default function Field({label,children,htmlFor,error}){
    const id = htmlFor || getChildId(children)
    return (
        <>
          <div>
             {label && <label htmlFor={id} >{label}</label>}
             {children}
             {!!error &&  <div role="alert" className='text-red-600'>{error.message}</div>}
          </div>
        </>
    );
}

const getChildId = (children) => {
  try {
    const child = React.Children.only(children);
    return child?.props?.id || null;
  } catch {
    return null; // if no child or multiple children
  }
};