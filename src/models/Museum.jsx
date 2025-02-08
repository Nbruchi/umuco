import { useGLTF } from "@react-three/drei";
import museumScene from "../assets/3d/museum.glb";

export default function Museum({ scale, position, ...props }) {
    const { nodes, materials } = useGLTF(museumScene);

    return (
        <group
            {...props}
            dispose={null}
            scale={scale}
            position={position}
            rotation={[0, 1, 0]}
        >
            <group position={[-72.498, 11.24, -259.011]} scale={3.853}>
                <mesh
                    geometry={nodes.agaseke001.geometry}
                    material={materials["bamboo_panel double"]}
                    position={[6.071, -1.195, -3.235]}
                    scale={0.26}
                />
                <mesh
                    geometry={nodes.agaseke006.geometry}
                    material={materials["Tatami Woven Mat"]}
                    position={[6.071, -1.195, -3.235]}
                    scale={0.392}
                />
                <mesh
                    geometry={nodes.ikibo001.geometry}
                    material={materials["Wood dark brown"]}
                    position={[10.14, 1.301, -3.676]}
                    scale={0.886}
                >
                    <mesh
                        geometry={nodes.GN_Instance_1.geometry}
                        material={materials["Wood dark brown"]}
                    />
                </mesh>
                <mesh
                    geometry={nodes.imbehe.geometry}
                    material={materials["Wood dark brown"]}
                    position={[4.397, -1.381, -2.907]}
                    rotation={[0, 0.517, 0]}
                    scale={0.626}
                />
                <mesh
                    geometry={nodes.isekuru.geometry}
                    material={materials["Wood Planks with Nails"]}
                    position={[5.546, -0.643, -0.77]}
                    scale={0.407}
                />
                <mesh
                    geometry={nodes.Tessellation.geometry}
                    material={materials["Old brown wood"]}
                    position={[10.105, -0.088, -3.725]}
                    scale={0.885}
                />
                <mesh
                    geometry={nodes.umuhini.geometry}
                    material={materials["Light Cherry Wood Grain.001"]}
                    position={[5.685, 1.321, -0.899]}
                    rotation={[-0.186, 0, 0]}
                    scale={0.407}
                />
            </group>
            <group
                position={[-9.826, 24.687, -199.967]}
                rotation={[0, 1.078, 0]}
            >
                <mesh
                    geometry={nodes.Arrow.geometry}
                    material={materials["Material.002"]}
                    position={[-14.241, 12.443, -1.526]}
                    rotation={[0, -0.291, -Math.PI / 2]}
                    scale={14.973}
                />
                <mesh
                    geometry={nodes.bow.geometry}
                    material={materials.Huji}
                    position={[20.998, 7.196, -4.329]}
                    rotation={[-0.045, 0.376, 2.812]}
                    scale={1.372}
                >
                    <mesh
                        geometry={nodes.Circle002.geometry}
                        material={materials["Brushed Aluminum 2"]}
                        position={[6.052, 8.658, 0.083]}
                        rotation={[-Math.PI, 0, 0]}
                        scale={0.023}
                    >
                        <lineSegments
                            geometry={nodes.BézierCurve.geometry}
                            material={materials["default"]}
                            position={[0.163, -1.055, 2.233]}
                            scale={64.623}
                        />
                    </mesh>
                </mesh>
                <mesh
                    geometry={nodes.spear009.geometry}
                    material={materials["Rough Wood"]}
                    position={[-5.733, 13.61, -5.344]}
                    rotation={[Math.PI / 2, 0.128, 0]}
                    scale={0.554}
                >
                    <mesh
                        geometry={nodes.spear001.geometry}
                        material={materials.metal}
                        position={[0.014, 0, -0.141]}
                        scale={1.092}
                    />
                </mesh>
                <mesh
                    geometry={nodes.spear010.geometry}
                    material={materials["Cabin Beam Wall Dark Brown Edgewear"]}
                    position={[-8.594, 13.688, -5.344]}
                    rotation={[Math.PI / 2, 0.189, 0]}
                    scale={0.566}
                >
                    <mesh
                        geometry={nodes.spear.geometry}
                        material={materials.metal}
                        scale={1.069}
                    />
                </mesh>
                <mesh
                    geometry={nodes.spear011.geometry}
                    material={materials["Cabin Beam Wall Dark Brown Edgewear"]}
                    position={[-2.835, 13.595, -5.344]}
                    rotation={[Math.PI / 2, 0.064, 0]}
                    scale={0.543}
                >
                    <mesh
                        geometry={nodes.spear002.geometry}
                        material={materials.metal}
                        position={[0.022, 0, -0.173]}
                        scale={1.115}
                    />
                </mesh>
                <mesh
                    geometry={nodes.spear012.geometry}
                    material={materials["Rough Wood"]}
                    position={[-0.395, -4.525, -5.344]}
                    rotation={[Math.PI / 2, 0, 0]}
                    scale={[0.46, 0.46, 0.988]}
                >
                    <mesh
                        geometry={nodes.spear003.geometry}
                        material={materials.metal}
                        position={[0.047, 0, -18.435]}
                        scale={[1.317, 1.317, 0.613]}
                    />
                </mesh>
                <mesh
                    geometry={nodes.spear013.geometry}
                    material={materials["Cabin Beam Wall Dark Brown Edgewear"]}
                    position={[0.714, -4.182, -5.344]}
                    rotation={[Math.PI / 2, -0.037, 0]}
                    scale={[0.453, 0.453, 0.974]}
                >
                    <mesh
                        geometry={nodes.spear004.geometry}
                        material={materials.metal}
                        position={[0.012, 0, -18.34]}
                        scale={[1.335, 1.335, 0.621]}
                    />
                </mesh>
                <mesh
                    geometry={nodes.spear014.geometry}
                    material={materials["Rough Wood"]}
                    position={[1.962, -4.291, -5.344]}
                    rotation={[Math.PI / 2, -0.091, 0]}
                    scale={[0.451, 0.451, 0.97]}
                >
                    <mesh
                        geometry={nodes.spear005.geometry}
                        material={materials.metal}
                        position={[0.037, 0, -18.4]}
                        scale={[1.342, 1.342, 0.624]}
                    />
                </mesh>
                <group
                    position={[-12.282, 3.908, -0.163]}
                    rotation={[Math.PI / 2, 0, 0.587]}
                    scale={11.988}
                >
                    <mesh
                        geometry={nodes.Torus_1.geometry}
                        material={materials["take.001"]}
                    />
                    <mesh
                        geometry={nodes.Torus_2.geometry}
                        material={materials.Yumihazu}
                    />
                    <mesh
                        geometry={nodes.Torus_3.geometry}
                        material={materials.Huji}
                    />
                    <mesh
                        geometry={nodes.Torus_4.geometry}
                        material={materials.leatherCoat}
                    />
                    <mesh
                        geometry={nodes.Torus_5.geometry}
                        material={materials.Turu}
                    />
                    <mesh
                        geometry={nodes.Torus_6.geometry}
                        material={materials.turumoto}
                    />
                </group>
            </group>
            <group
                position={[-26.753, 41.983, -177.766]}
                rotation={[-Math.PI / 2, 0, 0.752]}
                scale={[0.327, 0.021, 0.307]}
            >
                <mesh
                    geometry={nodes.Cube.geometry}
                    material={materials.metal}
                />
                <mesh
                    geometry={nodes.Cube_1.geometry}
                    material={materials["radial black chocolate"]}
                />
                <mesh
                    geometry={nodes.Cube_2.geometry}
                    material={materials.black}
                />
                <mesh
                    geometry={nodes.Cube_3.geometry}
                    material={materials.silver}
                />
            </group>
            <group
                position={[-26.753, 32.346, -177.766]}
                rotation={[-Math.PI / 2, 0, -2.066]}
                scale={[0.327, 0.021, 0.307]}
            >
                <mesh
                    geometry={nodes.Cube008.geometry}
                    material={materials.metal}
                />
                <mesh
                    geometry={nodes.Cube008_1.geometry}
                    material={materials["radial black chocolate"]}
                />
                <mesh
                    geometry={nodes.Cube008_2.geometry}
                    material={materials.black}
                />
                <mesh
                    geometry={nodes.Cube008_3.geometry}
                    material={materials.silver}
                />
            </group>
            <mesh
                geometry={nodes.Circle004.geometry}
                material={materials["Brushed Aluminum 2"]}
                position={[2.911, 65.833, -226.133]}
                rotation={[-2.471, -1.155, 0.715]}
                scale={0.032}
            >
                <mesh
                    geometry={nodes.Sphere.geometry}
                    material={materials["Red Wood"]}
                    position={[55.994, 1071.672, 14.074]}
                    rotation={[3.117, 0.281, -0.047]}
                    scale={197.306}
                >
                    <mesh
                        geometry={nodes.Sphere001.geometry}
                        material={materials["Red Wood"]}
                        position={[0, -0.315, 0]}
                    />
                    <mesh
                        geometry={nodes.Sphere002.geometry}
                        material={materials["Material.004"]}
                        position={[0, 0, 0.01]}
                    >
                        <mesh
                            geometry={nodes.GN_Instance_2.geometry}
                            material={materials["Material.004"]}
                        />
                    </mesh>
                </mesh>
            </mesh>
            <mesh
                geometry={nodes.inkongoro001.geometry}
                material={materials["Pine Wood"]}
                position={[-80.913, 6.135, -283.562]}
                scale={1.382}
            />
            <group
                position={[-9.275, 12.489, -274.724]}
                rotation={[0.023, 0.638, -0.168]}
                scale={1.185}
            >
                <mesh
                    geometry={nodes.Cylinder002_1.geometry}
                    material={materials["Brown fine hardwood teak"]}
                />
                <mesh
                    geometry={nodes.Cylinder002_2.geometry}
                    material={materials.metal}
                />
            </group>
            <group
                position={[-7.292, 14.074, -269.247]}
                rotation={[-2.931, -0.486, -2.921]}
                scale={1.185}
            >
                <mesh
                    geometry={nodes.Cylinder006.geometry}
                    material={materials["Mango Wood 03"]}
                />
                <mesh
                    geometry={nodes.Cylinder006_1.geometry}
                    material={materials.metal}
                />
            </group>
            <mesh
                geometry={nodes.Cylinder002.geometry}
                material={materials["Light Cherry Wood Grain.002"]}
                position={[-66.941, 10.236, -232.53]}
                scale={5.28}
            />
            <mesh
                geometry={nodes.Tessellation005.geometry}
                material={materials[" brown wood"]}
                position={[-86.375, 28.82, -220.419]}
                scale={[1, 0.7, 1]}
            />
            <mesh
                geometry={nodes.Tessellation004.geometry}
                material={materials[" brown wood"]}
                position={[-66.532, 28.206, -229.788]}
                rotation={[0, 1.571, 0]}
                scale={[1, 0.7, 1]}
            />
            <mesh
                geometry={nodes.Tessellation006.geometry}
                material={materials[" brown wood"]}
                position={[-87.337, 27.92, -234.011]}
                rotation={[Math.PI, -1.339, Math.PI]}
                scale={[1, 0.683, 1]}
            />
            <mesh
                geometry={nodes.SM_StrawMat372_M_StrawMat372_0001.geometry}
                material={materials.M_StrawMat372}
                position={[-123.472, 3.655, -338.319]}
                rotation={[Math.PI, 0, Math.PI]}
                scale={0.225}
            />
            <mesh
                geometry={nodes.Mesh002.geometry}
                material={materials["brown._lighter"]}
                position={[-206.67, 18.972, -200.32]}
                rotation={[0, -1.262, 0]}
                scale={[1.406, 0.888, 1.406]}
            >
                <mesh
                    geometry={nodes.GN_Instance.geometry}
                    material={materials["brown._lighter"]}
                />
            </mesh>
            <mesh
                geometry={nodes.Cylinder.geometry}
                material={materials[" brown wood"]}
                position={[-68.726, 107.182, -241.972]}
                rotation={[0, 0.041, 0]}
                scale={[1.788, 102.78, 1.788]}
            />
            <mesh
                geometry={nodes.Plane015.geometry}
                material={materials.forest_ground_04}
                position={[-322.808, -0.737, -241.981]}
            />
            <mesh
                geometry={nodes.Sphere019.geometry}
                material={materials.Bamboo}
                position={[-69.864, 2.751, -242.776]}
            />
            <mesh
                geometry={nodes.Sphere020.geometry}
                material={materials["Bamboo.003"]}
                position={[-69.864, 3.902, -243.265]}
                scale={1.047}
            />
            <mesh
                geometry={nodes.Torus034.geometry}
                material={materials["dark brown"]}
                position={[-210.738, 13.7, -275.88]}
                rotation={[-0.033, -0.308, -0.385]}
                scale={[0.867, 1.963, 2.021]}
            />
            <mesh
                geometry={nodes.Tessellation021.geometry}
                material={materials[" brown wood"]}
                position={[-66.532, 28.206, -249.788]}
                rotation={[-Math.PI, 0.553, -Math.PI]}
                scale={[1, 0.7, 1]}
            />
            <group
                position={[-71.657, -0.858, -244.588]}
                rotation={[-Math.PI, 0, -Math.PI]}
                scale={[-165.093, -1.633, -165.093]}
            >
                <mesh
                    geometry={nodes.Cylinder011.geometry}
                    material={materials.red_color}
                />
                <mesh
                    geometry={nodes.Cylinder011_1.geometry}
                    material={materials.white}
                />
            </group>
        </group>
    );
}
