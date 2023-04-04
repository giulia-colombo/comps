import className from "classnames";

const Button = ({
    children,
    primary,
    secondary,
    success,
    warning,
    danger,
    outline,
    rounded,
    ...rest //this will capture all the other props we are creating in App.js and passing down to the component. We can then access ALL the remaining props in the plain <button/> element on line 33 via {...rest}.
}) => {

  //later classname will override the earlier ones
  
  //rest.className will merge whatever extra custom className we are applying to our custom <Button/>, to the className we are building below using the className() function
  const classes = className(rest.className, "flex items-center px-3 py-1.5 border", {
    "border-blue-500 bg-blue-500 text-white": primary,
    "border-gray-900 bg-gray-900 text-white": secondary,
    "border-green-500 bg-green-500 text-white": success,
    "border-yellow-400 bg-yellow-400 text-white": warning,
    "border-red-500 bg-red-500 text-white": danger,
    "rounded-full": rounded,
    "bg-white": outline,
    "text-blue-500": outline && primary,
    "text-gray-500": outline && secondary,
    "text-green-500": outline && success,
    "text-yellow-500": outline && warning,
    "text-red-500": outline && danger
  })


    return (
        <button {...rest} className={classes}>{children}</button>
    );
};

// Button.propTypes = {
//     checkVariationValue: ({primary, secondary, success, warning, danger}) => {
//       const count = Number(!!primary)
//       + Number(!!secondary)
//       + Number(!!warning)
//       + Number(!!success)
//       + Number(!!danger)

//       if (count > 1) {
//         return new Error("Only one of primary, secondary, success, warning, danger can be true")
//       }
//     },  
// };
 
export default Button;