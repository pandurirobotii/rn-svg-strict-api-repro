import type { CodegenTypes, ViewProps } from "react-native";
import { codegenNativeComponent } from "react-native";

interface NativeProps extends ViewProps {
  opacity?: CodegenTypes.WithDefault<CodegenTypes.Float, 1.0>;
}

export default codegenNativeComponent<NativeProps>("RNSVGCircle", {
  interfaceOnly: true,
});
