import codegenNativeComponent from "react-native/Libraries/Utilities/codegenNativeComponent";
import type {
  Float,
  WithDefault,
} from "react-native/Libraries/Types/CodegenTypes";
import type { ViewProps } from "react-native";

interface NativeProps extends ViewProps {
  opacity?: WithDefault<Float, 1.0>;
}

export default codegenNativeComponent<NativeProps>("RNSVGCircle", {
  interfaceOnly: true,
});
