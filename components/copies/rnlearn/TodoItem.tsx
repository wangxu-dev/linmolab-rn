import { View, Pressable, Text, StyleSheet } from 'react-native';

import { RnlearnTodo } from '@/db/schema';


type TodoItemProps = {
    item: RnlearnTodo;
    index: number;
    onToggle: () => void;
    onDelete: () => void;
};

export default function TodoItem({ item, index, onToggle, onDelete }: TodoItemProps) {
    return <View style={styles.row}>
        <Pressable style={styles.content} onPress={onToggle}>
            <Text style={[styles.item, item.completed && styles.itemCompleted]} numberOfLines={1}>
                {index + 1}.{item.content}
            </Text>
        </Pressable>
        <Pressable style={styles.deleteButton} onPress={onDelete}>
            <Text style={styles.deleteText}>Del</Text>
        </Pressable>
    </View>
}

const styles = StyleSheet.create({
    content: {
        flex: 1,
    },

    deleteButton: {
        marginLeft: 12,
        paddingHorizontal: 6,
        paddingVertical: 4,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    itemCompleted: {
        textDecorationLine: 'line-through',
        color: '#999',
    },
    item: {
        fontSize: 16,
        color: '#333',
    },
    deleteText: {
        color: 'red',
        fontSize: 14,
        fontWeight: '500',
    }
});